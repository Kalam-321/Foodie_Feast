import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = ()=>{
    // let btn = "Login";
    const [btn,setBtn] = useState("Login");
    return (
        <div className="header">
            <div className="logo-container">
                 <img className= "logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact us</li>
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