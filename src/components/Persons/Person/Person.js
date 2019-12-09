import React from 'react';
import classes from './Person.css';

const Person = props => {
  return (
    //<div className="person" style={ style }>
    <div className={ classes.Person }>
      <h2 onClick={ props.click }>Hello my name is { props.name } and my age is { props.age }</h2>
      <input type="text" onChange={ props.changed } value={ props.name } />
    </div>
  );
}

export default Person;