import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = ()=>{
    // let btn = "Login";
    const [btn,setBtn] = useState("Login");
    useEffect(()=>{
        console.log("Use Effect called");
    },[btn])
    return (
        <div className="header">
            <div className="logo-container">
                 <img className= "logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact us</Link></li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={()=>{
                       btn==="Login"? setBtn("Logout") : setBtn("Login");   
                    }}>{btn}</button>
                </ul>
            </div>
        </div>

    )
}

export default Header;