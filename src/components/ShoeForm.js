import React, { useContext, useState } from 'react'
import CartContext from '../store/cart-context'

const ShoeForm = () => {
 const [formData,setFormData] = useState({
  name:'',desc:'',price:0,lg:0,med:0,sm:0
 })
  const cartCxt = useContext(CartContext);

  const handleChange=(e)=>{
    const {name,value} = e.target;
    setFormData({...formData,[name]:value});
    }

const addProducts=(e)=>{
  e.preventDefault();
  const obj=formData;
  cartCxt.addItem(obj);
}


  return (
    <form onSubmit={addProducts} >
        <label htmlFor="name">Shoe Name</label>
        <input type="text" name="name" onChange={handleChange} value={formData.name}/>
        <label htmlFor="desc">Description</label>
        <input type="text" name="desc" onChange={handleChange} value={formData.desc}/>
        <label htmlFor="price">Price</label>
        <input type="number" name="price" onChange={handleChange} value={formData.price}/>
        <label htmlFor="lg">L</label>
        <input type="number" name="lg" onChange={handleChange} value={formData.lg}/>
        <label htmlFor="med">M</label>
        <input type="number" name="med" onChange={handleChange} value={formData.med}/>
        <label htmlFor="sm">S</label>
        <input type="number" name="sm" onChange={handleChange} value={formData.sm}/>
        <button >Add Product</button>
    </form>
  )
}

export default ShoeForm
