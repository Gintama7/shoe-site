import React, { useState } from 'react'
import CartContext from './cart-context';

const CartProvider = (props) => {

  const [items,setItems] = useState([{id:'a1',name:'Navy Blue Armanis',price:1299,desc:'100% cotton',lg:98,med:77,sm:12 },]);
  const [cartItems,setCartItems] = useState([]);
  const [totalAmount,setTotalAmount] = useState(0);
  const [totalQuantity,setTotalQuantity] = useState(0);

  const addItemHandler=(item)=>{
     setItems((prev)=> {return [...prev,item]})
  }

  const removeItemHandler=(id)=>{

  }

  const addItemToCartHandler=(item)=>{
    const existingItem = cartItems.find((obj) => obj.id === item.id);

  
      if (existingItem) {
        const updatedCart = cartItems.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, lg: Number(cartItem.lg) + Number(item.lg), sm: Number(cartItem.sm) + Number(item.sm),med: Number(cartItem.med) + Number(item.med) } : cartItem
        );
        setCartItems(updatedCart); 
        const fullQuantity = existingItem.lg+existingItem.sm+existingItem.med;
        setTotalQuantity(fullQuantity);
        console.log(fullQuantity)
        const updatedAmount= (existingItem.price*fullQuantity);       
        setTotalAmount(prev=>prev+updatedAmount);
      } else {
        setCartItems([...items, { ...item}]);
        const fullQuantity = item.lg+item.sm+item.med;
        setTotalAmount(prev=>prev+(item.price*fullQuantity));
        console.log(fullQuantity)
        setTotalQuantity(fullQuantity)
      }
  }

  const cartContext ={ 
    items:items,
    cartItems:cartItems,
    totalAmount:totalAmount,
    totalQuantity:totalQuantity,
    addItem:addItemHandler,
    addItemToCart:addItemToCartHandler,
    removeItem:removeItemHandler
  }

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider
