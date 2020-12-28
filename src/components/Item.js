import { useEffect, useState } from 'react';
import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import {ProductContext} from "../context/ProductContext";


const Item =()=>{


  const [productos, setProductos] = useContext(ProductContext);
  console.log(productos);

  
return (
  <>
  {productos.length === 0 ? (
    <div>Espere un momento...</div>
  ) : (
    <div class="row d-flex justify-content-around">{productos.map((element, index) => 

      (
        
        <Link class="col-sm-3 d-flex flex-column vista" to={'/item/'+element.id}><h2>{element.nombre}</h2> <img class="img-fluid" src={element.img} alt={element.id}/><p>${element.precio}</p> <p>Disponibles: {element.stock}</p></Link>
        
        )
      
      )}</div>
  )
  }
</>
)
}
          
export default Item;