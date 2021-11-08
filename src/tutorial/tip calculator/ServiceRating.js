import React from 'react'

export default function ServiceRating({userSelection,value}) {
    return (
        // tip = total/value%
        // tip per person = tip/person
        // totalPerPerson = tipPerPerson+total/person
        <>
            <h3>how was your service</h3>
            <select onChange={userSelection} value={value}>
                <option >Choose</option>
                <option value='20'>Great-20%</option>
                <option value='10'>Good-10%</option>
                <option value='2'>Bad-2%</option>
            </select>
        </>
    )
}
