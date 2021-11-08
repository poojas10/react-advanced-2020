import React from "react";
import ServiceRating from "./ServiceRating";
import { useState } from "react";
import {InputBill,InputTotalCustomer,TipPerPerson} from "./InputField"

export default function CalculatorCard() {
 const [amount,setAmount]=useState('')
 const [people,setPeople]=useState('')
  const [rating, setRating] = useState('')
  const [data, setData] = useState([])
  function userSelection(e) {
  setRating(e.target.value)
}
  function submit(e) {
    e.preventDefault()
    const data = {
      id:Math.random().toString(),
      bill: amount,
      totalCustomer: people,
      rating:rating
    }
    setData(prev => {
      return [...prev,data]
    })
    setAmount('')
    setPeople('')
    setRating('')
}
  return (
    <div>
      <h1>Tip calculator</h1>
      <form className="user-input" onSubmit={submit}>
        <InputBill amount={amount} setAmount={setAmount}/>
       <InputTotalCustomer people={people} setPeople={setPeople} />
        <ServiceRating userSelection={userSelection} value={rating} />
        <button className="btn" type="submit">Calculate</button>
      </form>
     <TipPerPerson data={data} />
    </div>
  );
}
