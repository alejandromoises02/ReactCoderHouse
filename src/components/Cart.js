import React, { useContext } from "react";
import {CartContext} from "../context/CartContext"
import { Link } from 'react-router-dom';


const Cart =()=>{

    const [carrito, setCarrito] = useContext(CartContext);

   
    
return (
    <>
    {carrito.length === 0 ? (
    <div>Aun no has cargado productos a tu carrito!!! compra <Link to={'/'}>aqui</Link>!!!</div>
  ) : (
    <div class="card">{carrito.map((element, index) => (<p>{element.cantidad} {element.producto.name} {element.producto.precio}</p>))}</div>
  )
  }
    </>
  )

}

export default Cart;


    