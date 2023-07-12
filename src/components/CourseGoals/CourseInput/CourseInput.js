import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import  styles from './CourseInput.module.css';
// import { styled } from 'styled-components';

// const FormControl = styled.div`
//   margin: 0.5rem 0;
// & label {
//   font-weight: bold;
//   display: block;
//   margin-bottom: 0.5rem;
//   color:  ${(props) => (props.invalid ? 'red' : 'black')} ;
// }

// & input {
//   display: block;
//   width: 100%;
//   border: 1px solid  ${(props) => (props.invalid ? 'red' : '#ccc')} ;
//   background-color: ${(props) => (props.invalid ? 'salmon' : 'transparent')} ;
//   font: inherit;
//   line-height: 1.5rem;
//   padding: 0 0.25rem;
// }

// & input:focus {
//   outline: none;
//   background: #fad0ec;
//   border-color: #8b005d;
// }
// `;

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true)
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false)
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue('');
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* <FormControl invalid={!isValid ? 1 : 0}>
       className={!isValid && 'invalid'}
        &.invalid input {
  background-color: #fad0ec;
  border-color: red;
}
&.invalid label {
  color:red;
} */}
         <div className={`${styles['form-control']} ${!isValid ? styles.invalid: ''}`}>
        <label >Course Goal</label>
        <input value={enteredValue} type="text" onChange={goalInputChangeHandler} />

         </div>
        {/* <label style={{ color: !isValid ? 'red' : 'black' }}>Course Goal</label>
        <input  value={enteredValue} style={{ borderColor: !isValid ? 'red' : '#ccc' , background: !isValid ? 'salmon' : 'transparent' }} type="text" onChange={goalInputChangeHandler} /> */}
      {/* </FormControl> */}
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
