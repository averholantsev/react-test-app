import React from 'react'
import './Person.css'

const Person = props => {
    return (
        <div className="person">
            <h1 onClick={ props.click }>Hello my name is { props.name } and my age is { props.age }</h1>
            <p>{props.children}</p>
            <input type="text" onChange={ props.changed } value={ props.name } />
        </div>
    );
}

export default Person;