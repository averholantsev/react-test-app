import React, { Component } from 'react';
import Person from './Person/Person'
import './App.css';

class App extends Component {
  state = {
    persons: [
      { name: "Artem", age: "27" },
      { name: "Ann", age: "28" },
      { name: "Leon", age: "8" }
    ],
    showPersons: false
  }
  
  switchNameHandler = (newName) => {
    this.setState( {
      persons: [
        { name: "Arty", age: "7" },
        { name: "Anny", age: "8" },
        { name: newName, age: "8" }
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Arty", age: "27" },
        { name: event.target.value, age: "28" },
        { name: "Leon", age: "8" }
      ]
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }


  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      margin: '10px',
      cursor: 'pointer'
    }
    
    return (
      <div className="App">
        <h1>Persons cards</h1>
        <button 
          style={ style }
          onClick={ this.togglePersonsHandler }>Show/Hide</button>
        {this.state.showPersons ?
          <div>
            <Person 
              name={ this.state.persons[0].name } 
              age={ this.state.persons[0].age }/>
            <Person 
              name={ this.state.persons[1].name } 
              age={ this.state.persons[1].age }
              changed={ this.nameChangedHandler }/>
            <Person 
              name={ this.state.persons[2].name } 
              age={ this.state.persons[2].age }
              click={ this.switchNameHandler.bind(this, 'Leonardo') }>I have a dog</Person>
          </div> : null
        }
      </div>
    );
  }
}

export default App;