import React, { useEffect, useState } from "react";
import CartIcon from './CartIcon';
import ItemCount from './ItemCount';
import GetlistaProductos from  './ItemList';

const count = (counter) => {
  alert("El precio es :" + counter);
}

const ItemDetail = ({ide}) => {


  const [productos, setProductos]=useState([]);

  useEffect(async() => {
    const listaProductosJson = await GetlistaProductos();
    const productos = JSON.parse(listaProductosJson);
    setProductos(productos);
  }, [])




  return (

        <div class="card">
        <div class="card">{productos.map((element, index) => (element.id == ide &&<div><p>{element.id} {element.name} {element.precio} {element.stock}</p><ItemCount initial={1} min={0} max={element.stock} onAdd={count} valor={element.precio}/></div>))}</div>
        
          </div>
          

  )
}

export default ItemDetail;

