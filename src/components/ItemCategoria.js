import { useEffect, useState } from 'react';
import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import {ProductContext} from "../context/ProductContext"
import {ProductCatContext} from "../context/ProductCatContext"

const ItemCategoria =()=>{

  const [productosC, setProductosC] = useContext(ProductCatContext);
  

return (
  <>
  {productosC.length === 0 ? (
    <div>Espere un momento...</div>
  ) : (
    <div class="row d-flex justify-content-around">{productosC.map((element, index) => (<Link class="col-sm-4 d-flex flex-column vista" to={'/item/'+element.id}><h2>{element.nombre}</h2> <img class="img-fluid" src={element.img} alt={element.id}/><p>${element.precio}</p> <p>Disponibles: {element.stock}</p></Link>))}</div>
   )
  }
</>
)
}
          
export default ItemCategoria;