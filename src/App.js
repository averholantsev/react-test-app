import React, { useState } from 'react';
import Person from './Person/Person'
import './App.css';

const App = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: "Artem", age: "27" },
      { name: "Ann", age: "28" },
      { name: "Leon", age: "8" }
    ]
  });
  
  const switchNameHandler = (newName) => {
    setPersonsState({
      persons: [
        { name: "Arty", age: "7" },
        { name: "Anny", age: "8" },
        { name: newName, age: "8" }
      ]
    });
  }

  const nameChangedHandler = (event) => {
    setPersonsState({
      persons: [
        { name: "Arty", age: "27" },
        { name: event.target.value, age: "28" },
        { name: "Leon", age: "8" }
      ]
    });
  }

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
      <Person 
        name={ personsState.persons[0].name } 
        age={ personsState.persons[0].age }/>
      <Person 
        name={ personsState.persons[1].name } 
        age={ personsState.persons[1].age }
        changed={ nameChangedHandler }/>
      <Person 
        name={ personsState.persons[2].name } 
        age={ personsState.persons[2].age }
        click={ switchNameHandler.bind(this, 'Leonardo') }>I have a dog</Person>
      <button 
        style={ style }
        onClick={ switchNameHandler.bind(this, 'Leon') }>Switch Name</button>
    </div>
  );
}

export default App;