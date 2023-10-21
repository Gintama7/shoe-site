import React, { useContext } from 'react';
import './Header.css';
import CartContext from '../store/cart-context';


const Header = (props) => {
  const cartCtx = useContext(CartContext);

  let quantity=0;

  cartCtx.cartItems.forEach((item)=>{
    quantity= quantity + Number(item.quantity);
  })
  return (
    <div className='header'>
      <h1>Shoe Site</h1>
      <button>Cart {quantity}</button>
    </div>
  )
}

export default Header
