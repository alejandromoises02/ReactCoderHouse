// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import ItemCount from "./ItemCount";
import {CartContext} from "../context/CartContext"

const ItemDetail = ({ producto }) => {
  
const [carrito, setCarrito] = useContext(CartContext);

  const onAdd = (contador) => {
    
    let f =false;
    carrito.forEach(element => {
      if(element.producto.id == producto.id){
        element.cantidad = element.cantidad + contador;
        f = true;
      }
    });
    if(f == false){
      const NuevoAgregado = {cantidad: contador, producto: producto};
      setCarrito([...carrito,NuevoAgregado])
    }
    
  };

  return (
    <div class="card">
      <div class="card">
        <div>
          <p>
            {producto.nombre} {producto.precio} {producto.stock}
          </p>
          <ItemCount
            initial={1}
            min={1}
            max={producto.stock}
            onAdd={onAdd}
            valor={producto.precio}
          />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
