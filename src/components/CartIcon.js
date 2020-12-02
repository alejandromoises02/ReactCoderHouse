import React, { useContext, useEffect} from "react";
import cart from './img/cart.png';
import {CartContext} from "../context/CartContext"

const CartIcon =()=>{
    const [carrito, setCarrito] = useContext(CartContext);
    let cont = 0;

    useEffect(() => {
        carrito.forEach(element => {
            cont=cont+element.cantidad;
        });
    }, [carrito])

    carrito.forEach(element => {
        cont=cont+element.cantidad;
    });
    
    return(
        <>
            <div>{cont}</div>
            <img src={cart}/>
        </>
    )
}

export default CartIcon;