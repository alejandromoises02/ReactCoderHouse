import React, { useContext, useEffect} from "react";
import cart from './img/cart.png';
import {CartContext} from "../context/CartContext"
import {AggContext} from "../context/AggContext"

const CartIcon =()=>{
    const [carrito, setCarrito] = useContext(CartContext);
    const [agregado, setAgregado] = useContext(AggContext);
    let cont = 0;

    useEffect(() => {
        carrito.forEach(element => {
            cont=cont+element.cantidad;
        });
        setAgregado(false)
    }, [carrito, agregado])

    carrito.forEach(element => {
        cont=cont+element.cantidad;
    });
    
    return(
        <>
            <div>{cont}</div>
            <img src={cart} alt="compras"/>
        </>
    )
}

export default CartIcon;