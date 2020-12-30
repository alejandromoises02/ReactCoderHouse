import React, { useContext} from "react";
import { Link } from 'react-router-dom';
import {CartContext} from "../context/CartContext"



const Cart =()=>{

  const [carrito, setCarrito] = useContext(CartContext);
    

   
    
return (
    <>
    {carrito.length === 0 ? (
    <div className="d-flex justify-content-around"><p className="mesagge">Aun no has cargado productos a tu carrito!!! Mira nuestras ofertas <Link to={'/'}>aqui</Link>!!!</p></div>
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


