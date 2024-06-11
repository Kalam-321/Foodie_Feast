import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = ()=>{  
    // let listOfRestaurants = resList;

    // local state variable using useState()
    // let or const both work in this case. We can even change the state of const variable.
    const [listOfRestaurants,setListOfRestaurants] = useState([]);
    const [filterdRestaurants,setFilteredRestaurants] = useState([]);
    const [searchText,setSearchText] = useState("");
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
    console.log("Body rendered");
    // Conditional Rendering
    if (listOfRestaurants.length === 0) {
        return <Shimmer />;
    }
    return (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText}
                    onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}/> 
                    <button onClick={()=>{
                        console.log(searchText);
                        const filteredRestaurant = listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRestaurants(filteredRestaurant);
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={()=>{
                    const filteredList = listOfRestaurants.filter((res)=>res.info.avgRating>4);
                    setFilteredRestaurants(filteredList);
                    console.log(listOfRestaurants);
                }}>
                    Top rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {
                    filterdRestaurants.map(restaurant=>(
                        <Link to={"/restaurants/" + restaurant.info.id} key = {restaurant.info.id} className="resLink"><RestaurantCard  resData={restaurant}/></Link>
                    ))
                }             
            </div>
        </div>
    )
}

export default Body;