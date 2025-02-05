import React, { useEffect, useState } from 'react'
import getProductsApi from '../hooks/productData'

const Products = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const productList = getProductsApi()
    productList.then((data) => {
      setProducts(data)
    })
  }, [])

  if(products.length === 0){
    return <h1>Loading...</h1>
  }

  return (
    <div>
      {products.map((data) => (
        <div key={data.id}>
          <h1>{data.title}</h1>
        </div>
      ))}
    </div>
  )
}

export default Products