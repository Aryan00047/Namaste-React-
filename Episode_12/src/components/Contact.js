import React from "react";
import User from "./UserClass";
class Contact extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data:{
                name:"Dummy",
                avatar_url:"dummy@example.com",
            },
        };
        console.log("Child constructor is called");
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/aryan00047");
        const info = await data.json();
        this.setState({data:info});
        console.log("Child componentDidMount() is called");
    }

    componentDidUpdate(){
        console.log("Component updated");
    }

    render(){
        const {name, avatar_url} = this.state.data;
        return(
        <div className="user-card">
            <User name={name} avatar_url={avatar_url}/>
        </div>
        )
    }

    componentWillUnmount(){
        console.log("Contact Component unmounted")
    }
};

export default Contact;