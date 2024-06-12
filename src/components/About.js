import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";

class About extends Component
{
    constructor(props)
    {
        super(props);
        console.log("Parent Constructer");
    }
    render()
    {
        console.log("Parent Render");
        return (
            <div>
                <h1>About Class Component</h1>
                <h2>This is a web series of React</h2>
                {/* <User name={"Abdul Kalam (func)"}/> */}
                <UserClass name={"First"}/>
            </div>
        )
    }
    componentDidMount()
    {
        console.log("Parent  did mount");
    }
}



export default About;