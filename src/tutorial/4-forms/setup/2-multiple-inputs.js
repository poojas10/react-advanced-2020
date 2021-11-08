import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
const [person,setPerson] =useState({firstName:'',email:''})

  const handleSubmit = (e) => {
    e.preventDefault();
   
  };
  const inputChange=(e)=>{
const name=e.target.name;
const value=e.target.value;
setPerson((prev)=>{
  return {...prev,[name]:value}
})
  }
  return (
    <>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='firstName'>Name : </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={person.firstName}
              onChange={inputChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input
              type='email'
              id='email'
              name='email'
              value={person.email}
              onChange={inputChange}
            />
          </div>
          <button type='submit'>add person</button>
        </form>
        {/* {people.map((person, index) => {
          const { id, firstName, email } = person;
          return (
            <div className='item' key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          );
        })} */}
      </article>
    </>
  );
};

export default ControlledInputs;
