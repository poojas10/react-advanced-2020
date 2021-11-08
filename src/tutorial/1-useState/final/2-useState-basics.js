import React, { useState } from 'react';
import styles from "./addTask.module.css";
// starts with use
// component must be uppercase
// invoke inside function/component body
// don't call hooks conditonally

const UseStateBasics = () => {
  // console.log(useState());
  // const value = useState()[0];
  // const handler = useState()[1];
  // console.log(value, handler);

  const [text, setText] = useState('random title');
  const handleClick = () => {
    if (text === 'random title') {
      setText('hello world');
    } else {
      setText('random title');
    }
  };

  return (
    <>
      <h1 className='hey'>{text}</h1>
      <button type='button' className={styles.hey} onClick={handleClick}>click</button>
      <button type='button' className={styles.hey}>
        click
      </button>
    </>
  );
};

export default UseStateBasics;
