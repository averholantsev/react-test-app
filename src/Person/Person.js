import React from 'react'
import './Person.css'

const Person = props => {
    const style_child = {
        fontStyle: 'italic'
    }

    return (
        <div className="person">
            <h2 onClick={ props.click }>Hello my name is { props.name } and my age is { props.age }</h2>
            <p style={ style_child }>{ props.children }</p>
            <input type="text" onChange={ props.changed } value={ props.name } />
        </div>
    );
}

export default Person;