import React, { useEffect, useState } from 'react';
import ProductCarousel from './component/ProductCarousel';

const App = () => {

  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch('http://localhost:4000/api/products')
    .then(response => response.json())
    .then(data => setProducts({data}))
  })

  return (
    <>
    <ProductCarousel products={products} />
    </>
  );
}

export default App;
