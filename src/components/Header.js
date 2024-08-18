import { LOGO_URL } from "../utils/constants";
import { useEffect, useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";



const Header = ()=>{
    // let btn = "Login";
    const [btn,setBtn] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);

    // Subscribing to the store using Selector
    const cartItems = useSelector((store)=>store.cart.items);
    console.log(cartItems);
    useEffect(()=>{
        console.log("Use Effect called");
    },[btn])
    return (
        <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-100 lg:bg-green-100">
            <div className="w-28">
                 <img className= "logo" src={LOGO_URL}/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status : {onlineStatus ? "✅" : "🔴"}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About</Link></li>
                    <li className="px-4"><Link to="/contact">Contact us</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4 font-bold text-xl"><Link to="/cart">Cart - {cartItems.length}</Link></li>
                    <li className="px-4 text-lg">{loggedInUser}</li>
                    <button className="px-4" onClick={()=>{
                       btn==="Login"? setBtn("Logout") : setBtn("Login");   
                    }}>{btn}</button>
                </ul>
            </div>
        </div>

    )
}

export default Header;