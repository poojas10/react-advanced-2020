import { useState, useEffect } from 'react';

export const useFetch = (url) => {
    const [loading,isLoading]=useState(true)
    const [products,setProducts] = useState([])

   async function getProducts(){
      const response = await fetch(url)
      const products= await response.json()
      setProducts(products)
      isLoading(false)
    }
    useEffect(() => {
       getProducts()
    }, [url])
return [loading,products]
};
