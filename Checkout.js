import React, { useContext, useMemo, useCallback } from 'react';
import CartContext from '../context/CartContext';

const Checkout = () => {
  const { cart, dispatch } = useContext(CartContext);

  const cartTotal = useMemo(() => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cart]);

  const handleRemove = useCallback(
    (id) => {
      dispatch({ type: 'REMOVE_FROM_CART', payload: { id } });
    },
    [dispatch]
  );

  return (
    <div>
      <h3>Cart Total: {cartTotal}</h3>
      {cart.map((item) => (
        <div key={item.id}>
          <p>{item.title}</p>
          <button onClick={() => handleRemove(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Checkout;
