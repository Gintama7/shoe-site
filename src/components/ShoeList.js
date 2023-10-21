import React, { useContext } from 'react';
import CartContext from '../store/cart-context';


const ShoeList = (props) => {
 const crtCtx = useContext(CartContext);
  const addItems =(e)=>{
    if(e.target.name ==='large')
    {
      const obj = {id:props.desc,name:props.name,desc:props.desc,price:Number(props.price),lg:1,med:0,sm:0}
      crtCtx.addItemToCart({...obj});
    }
    else if(e.target.name ==='small')
    {
      const obj = {id:props.desc,name:props.name,desc:props.desc,price:Number(props.price),lg:0,med:0,sm:1}
      crtCtx.addItemToCart({...obj});
    }else if(e.target.name ==='medium')
    {
      const obj = {id:props.desc,name:props.name,desc:props.desc,price:Number(props.price),lg:0,med:1,sm:0}
      crtCtx.addItemToCart({...obj});
    }
    
  }

  return (
    <li id={props.desc}>
      {props.name} {props.desc} ${props.price} 
      <button name="large" onClick={addItems}> Buy Large{props.lg}</button>
      <button name="small" onClick={addItems}> Buy Small{props.sm}</button>
      <button name="medium" onClick={addItems}>  Buy Medium{props.med}</button>
    </li>
  );
}

export default ShoeList
