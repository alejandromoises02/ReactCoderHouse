import React, { useContext} from "react";
import { Link } from 'react-router-dom';
import {CartContext} from "../context/CartContext";
import Form from "./Form";



const Cart =()=>{

  const [carrito, setCarrito] = useContext(CartContext);
    

   
    
return (
    <>
    {carrito.length === 0 ? (
    <div>Aun no has cargado productos a tu carrito!!! compra <Link to={'/'}>aqui</Link>!!!</div>
  ) : (<>
  <div class="comprar container">
<div class="align-self-center">
<h1>Completa tu compra</h1>
</div>
<div class="facturaDatos">
<div id="factura" class="col-6">

<div className='elementoCarrito row'><p className='col-2'>Cantidad</p><p className='col-6'>Descripcion</p><p className='col-2'>Precio Unitario</p><p className='col-2'>Precio Total</p></div>
  {carrito.map((element, index) => (<div className='elementoCarrito row'><p className='col-2'>{element.cantidad}</p> <p className='col-6'>{element.producto.nombre}</p> <p className='col-2'>{element.producto.precio}</p><p className='col-2'>{element.producto.precio*element.cantidad}</p></div>
    
    ))}

</div>
<div id="datos" class="col-6"> <Form/></div>

</div>
</div>

    
    
    </>
  )
  }
    </>
  )

}

export default Cart;


