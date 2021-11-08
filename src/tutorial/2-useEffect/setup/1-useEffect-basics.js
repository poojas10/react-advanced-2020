import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [para, setPara] = useState(null)

  useEffect(() => {
   setTimeout(() => {
     setPara(1)
   }, 3000);
  },[])
  return (
    <>
      {!para && <h1>Loading...</h1>}
    </>
  );
};
function Para() {
  return (
    <>
      <p>this is a para</p>
      </>
  )
}
export default UseEffectBasics;
