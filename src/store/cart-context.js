import React from "react";

const CartContext = React.createContext({
    items:[],
    cartItems:[],
    totalAmount:0,
    totalQuantity:0,
    addItem:(item)=>{},
    addItemToCart:(item)=>{},
    removeItem:(id)=>{}
})

export default CartContext;