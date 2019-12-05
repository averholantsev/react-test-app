import React, { Component } from 'react';
import Person from './Person/Person'
import './App.css';

class App extends Component {
  state = {
    persons: [
      { id: 'ab7280a2-cf27-42e1-a5db-e796aa2f07f0', name: "Artem", age: "27" },
      { id: '528a09e8-a4ac-45f7-a45e-8f9681fddfc2', name: "Ann", age: "28" },
      { id: 'd4585e5b-6cf4-4369-aa49-8597644d1706', name: "Leon", age: "8" }
    ],
    showPersons: false
  }
  
  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
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
    this.setState({ showPersons: !doesShow });
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

    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return(
                <Person 
                  click={ () => this.deletePersonHandler(index) }
                  name={ person.name } 
                  age={ person.age }
                  key={ person.id } />
              );
            })
          }
        </div>
      )
    }
    
    return (
      <div className="App">
        <h1>Persons cards</h1>
        <button 
          style={ style }
          onClick={ this.togglePersonsHandler }>Show/Hide</button>
        { persons }
      </div>
    );
  }
}

export default App;