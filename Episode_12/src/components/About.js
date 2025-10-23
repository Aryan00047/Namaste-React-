import { Component } from "react";
import User from "./UserClass";
import UserContext from "../utils/userContext";

// const About = () =>{
//     return(
//         <div>
//         <h1>About US</h1>
//         <User name={"Aryan Gupta"} location={"Bangalore"}/>
//         </div>
//     )
// };

class About extends Component{
    constructor(){
        super();
        console.log("Parent constructor called");
    }
    componentDidMount(){
        console.log("Parent componentDidMount() is Called")
    }
    render(){
        console.log("Parent render called");
        return(
            <div>
                <h1>About US</h1>
                <div>
                <h2>LoggedIn User: <UserContext.Consumer>{({loggedInUser}) => <span>{loggedInUser}</span>}</UserContext.Consumer></h2>
                </div>
                <User name={"Aryan"} location={"Bangalore"}/>
                {/* <User name={"Second"} location={"Mumbai"}/> */}
            </div>
        )
    }
}

export default About;