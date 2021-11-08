import React, { useState } from 'react';

let obj = {
  name: "peter",
  age: 24,
  message: "random message",
};
const UseStateObject = () => {
 const [person, setPerson] = useState(obj);
  // const personData = {...person}
 return (
   <>
   <h2>{person.name}</h2>
   <h3>{person.age}</h3>
   <h4>{person.message}</h4>
    <button className="btn" onClick={()=>{
      setPerson({...person,message:"hey there"})
      // console.log(person.message);
    }}>Send message</button>
    </>
  )
};

export default UseStateObject;
