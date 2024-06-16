import RestaurantCard,{withLabel} from "./RestaurantCard";
import { useEffect, useState,useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";



const Body = ()=>{  
    // let listOfRestaurants = resList;

    // local state variable using useState()
    // let or const both work in this case. We can even change the state of const variable.
    const [listOfRestaurants,setListOfRestaurants] = useState([]);
    const [filterdRestaurants,setFilteredRestaurants] = useState([]);
    const [searchText,setSearchText] = useState("");
    const RestaurantCardPromoted = withLabel(RestaurantCard);
    const {setUserName,loggedInUser} = useContext(UserContext);
    
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=>{
        const data = await fetch("https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=15.793212&lng=78.0441517&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }


    const onlineStatus = useOnlineStatus();
    if(!onlineStatus)
    {
        return (
            <h1>Looks like you're offline. Check your internet connection.</h1>
        )
    }

    console.log("Body rendered");
    console.log(listOfRestaurants);
    // Conditional Rendering
    if (listOfRestaurants.length === 0) {
        return <Shimmer />;
    }
    return (
        <div className="body">
            <div className="filter flex">
                <div className="p-4 m-4">
                    <input type="text" className="border border-solid border-black h-9" value={searchText}
                    onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}/> 
                    <button onClick={()=>{
                        console.log(searchText);
                        const filteredRestaurant = listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRestaurants(filteredRestaurant);
                    }} className="m-4 px-4 py-2 bg-green-100 rounded-lg">Search</button>
                </div>
                <div className="p-4 m-4 flex items-center">
                    <button className="m-4 px-4 py-2 bg-green-100 rounded-lg" onClick={()=>{
                        const filteredList = listOfRestaurants.filter((res)=>res.info.avgRating>4);
                        setFilteredRestaurants(filteredList);
                        console.log(listOfRestaurants);
                    }}>
                        Top rated Restaurants
                    </button>
                    <div>
                        <label>Username : </label>
                        <input
                            className="border border-black px-2"
                            value={loggedInUser}
                            onChange={(e)=>setUserName(e.target.value)}
                        />
                    </div>
                </div>
                
            </div>
            <div className="flex flex-wrap">
                {
                    filterdRestaurants.map(restaurant=>(
                        <Link to={"/restaurants/" + restaurant.info.id} key = {restaurant.info.id} className="resLink">
                            {restaurant.info.avgRating>=4.2 ? (<RestaurantCardPromoted resData={restaurant}/>) : (<RestaurantCard  resData={restaurant}/>)}
                        </Link>
                    ))
                }             
            </div>
        </div>
    )
}

export default Body;