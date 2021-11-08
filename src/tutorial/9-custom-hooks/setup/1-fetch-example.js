import React, { useState, useEffect } from 'react'
import { useFetch } from './2-useFetch'
import './mainSaas.scss'

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/javascript-store-products'

const Example = () => {
 const [loading,products] = useFetch(url)
  return (
    <div className='container'>
        <h1>products</h1>
      <div>{loading ? 'loading...' : <DisplayProducts products={products} />}</div>
    </div>
  )
}
function DisplayProducts({products}){
  return (
    <>
    {products.map(e=>{
      return <p key={e.id}>{e.fields.name}</p>
    })}
    </>
  )
}

export default Example
