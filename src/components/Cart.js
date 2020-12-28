import React, { useContext} from "react";
import { Link } from 'react-router-dom';
import {CartContext} from "../context/CartContext"



const Cart =()=>{

  const [carrito, setCarrito] = useContext(CartContext);
    

   
    
return (
    <>
    {carrito.length === 0 ? (
    <div>Aun no has cargado productos a tu carrito!!! compra <Link to={'/'}>aqui</Link>!!!</div>
  ) : (<>
    <div class="card">{carrito.map((element, index) => (<p>{element.cantidad} {element.producto.nombre} {element.producto.precio}</p>))}</div>

    <Link to={'/process'}>
    <button> Comprar </button>
    </Link>
    </>
  )
  }
    </>
  )

}

export default Cart;


