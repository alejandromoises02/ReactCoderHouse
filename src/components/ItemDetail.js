import React, { useState } from "react";
import CartIcon from './CartIcon';
import ItemCount from './ItemCount';

const count = (counter) => {
  alert("El precio es :" + counter);
}

const ItemDetail = ({prod}) => {

  return (
    <div class="card">
        <p>{prod}</p>
        <ItemCount initial={1} min={0} max={10} onAdd={count}/>
    </div>
)

}

export default ItemDetail;

