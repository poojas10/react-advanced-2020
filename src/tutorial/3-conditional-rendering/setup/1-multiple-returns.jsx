import React,{useState,useEffect} from 'react'

export default function MultipleReturns() {
  const [data,setData]=useState([])
  const [isLoading,setLoading]=useState(false)
  const [isError,setError]=useState(false)
 const getBookData= async ()=>{
   setLoading(true)
   try{
    const response = await fetch('https://openlibrary.org/works/OL45883W.json')
    if(!response.ok) throw new Error('something is wrong')
    const data = await response.json()
    setData(data)
    setLoading(false)
   }catch(error){
    setLoading(false)
     setError(error.message)
   }
 }
    useEffect(() => {
  getBookData()
  }, [])
  if(isLoading){
return <Loading />
  }
  if(isError){
    return <Error error={isError} />
  }
    return (
      <div>
        <p>{data.description}</p>
      </div>
    )

}
function Loading(){
  return (
    <div>
      <h1>Loading....</h1>
    </div>
  )
}
function Error({error}){
  return(
    <div>
      <h1>Error....</h1>
      <p>{error}</p>
    </div>
  )
}
