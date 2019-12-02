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

  const [ otherState, setOtherState ] = useState({
    text: 'some other text'
  });

  console.log(personsState, otherState);
  
  const switchNameHandler = () => {
    console.log('Was clicked!');
    setPersonsState({
      persons: [
        { name: "Arty", age: "7" },
        { name: "Anny", age: "8" },
        { name: "Leon", age: "8" }
      ]
    });
  }

  return (
    <div className="App">
      <Person name={ personsState.persons[0].name } age={ personsState.persons[0].age }/>
      <Person name={ personsState.persons[1].name } age={ personsState.persons[1].age }/>
      <Person name={ personsState.persons[2].name } age={ personsState.persons[2].age }>I have a dog</Person>
      <p> { otherState.text } </p>
      <button onClick={switchNameHandler}>Switch Name</button>
    </div>
  );
}

export default App;