import { useEffect, useState } from 'react';
import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import {ProductContext} from "../context/ProductContext"

const Item =()=>{

  const [productos, setProductos] = useContext(ProductContext);

  

  /*const [productos, setProductos]=useState([]);

  useEffect(async() => {
    const listaProductosJson = await GetlistaProductos();
    const productos = JSON.parse(listaProductosJson);
    setProductos(productos);
  }, [])*/


return (
  <>
  {productos.length === 0 ? (
    <div>Espere un momento...</div>
  ) : (
    <div class="card">{productos.map((element, index) => (<Link to={'/item/'+element.id}><p>{element.nombre} {element.precio} {element.stock}</p></Link>))}</div>
  )
  }
</>
)
}
          
export default Item;