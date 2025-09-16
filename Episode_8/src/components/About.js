import { Component } from "react";
import User from "./UserClass";

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
        console.log("parent constructor called");
    }
    componentDidMount(){
        console.log("parent componentDidMount() is Called")
    }
    render(){
        console.log("parent render called");
        return(
            <div>
                <h1>About US</h1>
                <User name={"Aryan Gupta"} location={"Bangalore"}/>
            </div>
        )
    }
}

export default About;