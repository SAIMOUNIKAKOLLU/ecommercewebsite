import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import CartContext from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { dispatch } = useContext(CartContext);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error('Error fetching product:', error));
  }, [id]);

  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: { ...product, quantity: 1 } });
  };

  return (
    <div className='container border border-color border-primary p-2 m-2 text-center' style={{width:"40rem",backgroundColor:"lightgray",height:"300px"}}>
      {product && (
        <>
          <h2>{product.title}</h2>
          <img src={product.image} style={{height:'100px'}} alt="..." />
          <p>{product.price}</p>
          <button onClick={addToCart} className='btn btn-success'>Add to Cart</button>
        </>
      )}
    </div>
  );
};

export default ProductDetail;
