import React, { useEffect, useState } from 'react';
import ProductCarousel from './component/ProductCarousel';

const Related = () => {

  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/api/products/')
    .then(response => response.json())
    .then(data => setProducts(data))
  }, [])

  if(products !== null) {
    return (
      <>
      <ProductCarousel products={products} />
      </>
    );
  }
  
}

export default Related;
