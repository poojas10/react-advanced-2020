import React, { useState } from "react";
import { UserCard } from "./UserCard";
import { Input } from "./Input";
const UseStateArray = () => {
  const [userInfo, setuserInfo] = useState([]);
  const [user, userValue] = useState('');
  function userInput(e) {
    const user = {
      name: e.target.value,
    }
    userValue(user)
  }
  function submit(e) {
    e.preventDefault()
    setuserInfo(prev => {
      return [...prev, user];
    })
    userValue('')
  }
  function removeItems(id) {
    setuserInfo((prev) => {
      const items = [...prev]
      items.splice(id,1)
       return items
     });
  }
  return (
    <>
      <Input userInput={userInput} submit={submit} value={user?user.name:''}/>
      <UserCard array={userInfo} removeItems={removeItems}  />
      </>
)
};


export default UseStateArray;
