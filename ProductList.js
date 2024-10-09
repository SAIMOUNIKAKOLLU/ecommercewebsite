import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
      <div className='d-flex flex-wrap'>
      {
       products.map((product) => (
         <div key={product.id} className='border border-2 border-success m-2 text-center p-2'  style={{width:'20rem',backgroundColor:"lightgray"}}>
          <h3>{product.title}</h3>
          <img src={product.image} style={{height:'100px',width:"120px"}} alt="..." />
          <p>{product.price}</p>
          <Link to={`/product/${product.id}`}> <button className='btn btn-primary m-2'>View Details</button></Link>
        </div>
      ))}
      </div>
  );
};

export default ProductList;
