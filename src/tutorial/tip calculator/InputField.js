import React from "react";

export const InputBill = ({ amount, setAmount }) => {
  return (
    <>
      <h3>How much was your bill?</h3>
      <div className="input">
        <span>
          <i className={`fas fa-dollar-sign}`}></i>
        </span>
        <input
          type="number"
          step={0.01}
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        ></input>
      </div>
    </>
  );
}

export const InputTotalCustomer=({people,setPeople})=>{
  return (
    <>
      <h3>How many people are sharing the bill?</h3>
      <div className="input">
        <span>
          <i className={`fas fa-user-alt}`}></i>
        </span>
        <input
          type="number"
          value={people}
          onChange={(e) => setPeople(e.target.value)}
        ></input>
      </div>
    </>
  );
}
export const TipPerPerson = ({ data }) => {
  return (
    <>
      {data.map((e) => {
        const { id, bill, totalCustomer, rating } = e;
        return (
          <div key={id}>
            <h3>total bill is {bill}</h3>
            <p>total customer is {totalCustomer}</p>
            <p>{rating}</p>
          </div>
        );
      })}
    </>
  );
};
