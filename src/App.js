import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  constructor(props){
    super(props)
    console.log('[App.js] Inside Constructor',props); 
    this.state = {
      persons: [
        {name: 'ahmed', age:28},
        {name: 'basant', age:26},
        {name: 'hassan', age:25},
      ],
      otherState: 'value',
      showPerson: false
    }
  }
  componentWillMount(){
    console.log('[App.js] Inside ComponentWillMount'); 
  }
  componentDidMount(){
    console.log('[App.js] Inside ComponentDidMount'); 
  }
  
 
  // switchNameHandler = () => {
  //   console.log('was Clicked');
  //   this.setState({
  //     persons: [
  //       {name: 'ahmed', age:22, id: "aaa55"},
  //       {name: 'basant', age:20, id: "abc458"},
  //       {name: 'hassan', age:25, id: "rty679"}
  
  //     ]
  //   })
  // }
  nameChangeHandler = (event, id) => {
    console.log('was Clicked');
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;      
    });
  
    console.log(personIndex);

    const person ={
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value ;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons:persons});
  }
  toggleShowHandler = () =>{
    const hide =this.state.showPerson;
    this.setState({showPerson: !hide})
  }
  render() {
    console.log('[App.js] Inside render'); 
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    let person = null;
    if(this.state.showPerson){
      person = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            name={person.name}
            age={person.age} 
            changed={(event) => this.nameChangeHandler(event, person.id)}
            key={person.id}
            />
       
        }
        )}
      </div>
      );

    }
    return (
      <div className="App">
        <h1> I am React App </h1>
        <button  style={style} onClick={this.toggleShowHandler } >Switch Name</button>
        <p> {this.state.otherState} </p>
        {person}
      </div>
    );
  }
}

export default App;
