import { useState } from "react";

const User = ({name})=>{
    const [count] = useState(0);
    const [count2] = useState(2);
    return (
        <div className="user-card">
            <h1>{count}</h1>
            <h1>{count2}</h1>
            <h2>Name : {name}</h2>
            <h3>Location : Kurnool</h3>
            <h4>Contact : 9390734072</h4>
        </div>
    )
}

export default User;