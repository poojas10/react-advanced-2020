import React, { useState } from "react";


const UseStateBasics = () => {
  const [toggle,setToggle] = useState(null)
  const [title, setTitle] = useState('text appears here on typing')
  function handler() {
    setToggle(!toggle)
    !toggle? setTitle('on'):setTitle('off')
  }
  return (
    <>
      <h1>{title}</h1>
     <button onClick={handler}>click</button>
    </>
  );
}
  
  // let toggle = false;
  // let counter = 0;
  // let [text, setText] = useState('ra');
  // let [button, setButton] = useState("change title")
  // const handlerClick = () => {
  //   counter++;
  //   toggle=!toggle
  //   if (toggle) {
  //   setText('hey')
  //   }
  //   else {
  //     setText('random')
  //   }
  //   console.log(toggle);
  // };
  // return (
  //   <>
  //     <h1>{text}</h1>
  //     <button className="btn" onClick={()=>{handlerClick()}}>
  //       {button}
  //     </button>
  //   </>
  // );


export default UseStateBasics;
