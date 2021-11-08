import React from "react";
export const Input = ({ userInput, submit, value }) => {
  return (
    <>
      <form onSubmit={submit}>
        <input type="text" onChange={userInput} value={value}></input>
        <button type="submit" className="btn">
          submit
        </button>
      </form>
    </>
  );
};
