import React, { useState } from "react";
import CartIcon from './CartIcon';
import ItemCount from './ItemCount';

const count = (counter) => {
  alert("El precio es :" + counter);
}

const ItemDetail = ({prod}) => {

  return (
    <div class="card">
        <p>{prod.id}  {prod.nombre} {prod.precio} {prod.stock}</p>
        <ItemCount initial={1} min={0} max={prod.stock} onAdd={count} valor={prod.precio}/>
    </div>
)

}

export default ItemDetail;

