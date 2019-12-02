import React from 'react'

const Person = props => {
    return (
        <div className="person">
            <h1>Hello my name is { props.name } and my age is { props.age }</h1>
            <p>{props.children}</p>
        </div>
    );
}



export default Person;