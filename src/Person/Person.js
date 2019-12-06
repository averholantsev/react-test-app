import React from 'react';
//import './Person.css';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 50%;
  margin: 15px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 15px;
  text-align: center;

  @media (min-width: 500px): {
    width: 450px;
  }
`;

const Person = props => {
  /* const style = {
    '@media (min-width: 500px)': {
      width: '450px'
    }
  }; */ 

  return (
    //<div className="person" style={ style }>
    <StyledDiv>
      <h2 onClick={ props.click }>Hello my name is { props.name } and my age is { props.age }</h2>
      <input type="text" onChange={ props.changed } value={ props.name } />
    </StyledDiv>
  );
}

export default Person;