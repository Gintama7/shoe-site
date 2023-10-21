import React, { useContext } from 'react'
import CartContext from '../store/cart-context'
import ShoeList from './ShoeList';

const ShoeCatalogue = (props) => {
 const cartCxt = useContext(CartContext);

  const items = cartCxt.items;

  return (
    <ul>
      {items.map((item)=>(
        <ShoeList key={items.desc} name={item.name} desc={item.desc} price={item.price} lg={item.lg}  med={item.med} sm={item.sm}/>
      ))
    
      }
    </ul>
  )
}

export default ShoeCatalogue;
