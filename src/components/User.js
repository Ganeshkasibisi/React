import React from 'react';

class User extends React.Component{
    constructor(props){
        super(props);
     this.state = {
        count:0
     }
}
    render(){
        const {name,location} = this.props;
        return (
            <>
            <h2>Count:{this.state.count}</h2>
            <button onClick={()=>{
                 this.setState({
                    count:this.state.count +1})
            }}
            >
                Click
            </button>
            <h2>Name:{name}</h2>
            <h2>Contact:ganesh@swiggy.com</h2>
            <h2>{location}</h2>
            </>
        );

    }
}
export default User;