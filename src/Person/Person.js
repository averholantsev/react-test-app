import React from 'react'
import './Person.css'
import Radium from 'radium';

const Person = props => {
  return (
    <div className="person">
      <h2 onClick={ props.click }>Hello my name is { props.name } and my age is { props.age }</h2>
      <input type="text" onChange={ props.changed } value={ props.name } />
    </div>
  );
}

export default Radium(Person);