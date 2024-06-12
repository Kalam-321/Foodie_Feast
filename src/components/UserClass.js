import React from "react";
class UserClass extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            userInfo : {
                name : "dummy",
                location : "dummy"
            }
        }


        console.log(this.props.name +"Child Constructer");
    }
    
    async componentDidMount()
    {
        console.log(this.props.name +"Child did mount");
        const data = await fetch("https://api.github.com/users/Kalam-321");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo : json
        })
    }

    componentDidUpdate()
    {
        console.log("Updated")
    }

    componentWillUnmount()
    {
        console.log("Unmounted");
    }

    render()
    {
        console.log(this.props.name +"Child Render");
        const {name,location} = this.state.userInfo;
        return (
            <div className="user-card">              
                <h2>Name : {name}</h2>
                <h3>Location : {location}</h3>
                <h4>Conatact : 9390734072</h4>
            </div>
        )
    }
}

export default UserClass;