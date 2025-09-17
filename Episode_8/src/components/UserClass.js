import React from "react";

class User extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count : 0,
            // count2: 2,
        };
        console.log(this.props.name + "Child constructor is called");
    }
    componentDidMount(){
        console.log(this.props.name + "Child componentDidMount() is called");
    }
    render(){
        console.log(this.props.name + "Child render is called");
        const {name,location} = this.props;
        const {count} = this.state;
        return(
        <div className="user-card">
            <h1>Count: {count}</h1>
            <button onClick={()=>{
                this.setState({
                    count: count+1
                })
            }}>Increase</button>
                        <button onClick={()=>{
                this.setState({
                    count: count-1
                })
            }}>Decrease</button>
            {/* <h1>Count2: {count2}</h1> */}
            <h1>Name: {name}</h1>
            <h3>Software Engineer</h3>
            <h4>{location}</h4>
            <p>Full Stack Developer with 2 years of experience</p>
        </div>
        )
    }
};

export default User;