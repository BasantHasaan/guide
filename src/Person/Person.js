import React, { Component } from 'react';
import './Person.css';

class Person extends Component{
    constructor(props){
        super(props)
        console.log('[person.js] Inside Constructor',props); 
        //this.state = {
         
      }
      componentWillMount(){
        console.log('[person.js] Inside ComponentWillMount'); 
      }
      componentDidMount(){
        console.log('[person.js] Inside ComponentDidMount'); 
      }
    render(){
        console.log('[Person.js] Inside render'); 
        return(
            <div className="Person">
                <p onClick={this.props.click}> Person {this.props.name} and I am {this.props.age} </p>
                <p> {this.props.children} </p>
                <input type="text"  onChange={this.props.changed} value={this.props.name}/>
            </div>
        );
    }
}

export default Person;