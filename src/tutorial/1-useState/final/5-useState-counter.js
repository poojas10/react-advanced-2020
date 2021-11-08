import React, { useState } from "react";
import styles from './index.module.css';
const UseStateCounter = () => {
  // const [value, setValue] = useState(0);

  // const reset = () => {
  //   setValue(0);
  // };

  // const complexIncrease = () => {
  //   setTimeout(() => {
  //     // setValue(value + 1);
  //     setValue((prevState) => {
  //       return prevState + 1;
  //     });
  //   }, 2000);
  // };

  return (
    <section style={{ margin: "4rem 0" }}>
      {console.log(styles)}
      {/* <h1 className={styles.hello}>header</h1> */}
      <button className='btn'>btn</button>
    </section>
  );
};

export default UseStateCounter;
