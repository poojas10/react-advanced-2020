import React, { useState } from "react";
import { quiz} from "../../../quiz";

const UseStateCounter = () => {
  const [title, setTitle] = useState('title')
  function changeTitle(data) {
    setTitle(data)
    console.log(Math.random());
  }
  return (
    <>
      <h1>{title}</h1>
      <Child titleChange={changeTitle} />
    </>
  );
  
};
function Child({titleChange}) {
  return (
    <>
      <button onClick={() => titleChange('title yo')}>change title</button>
    </>
  );
}
export default UseStateCounter;
