// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import ItemCount from "./ItemCount";
import {CartContext} from "../context/CartContext"
import {AggContext} from "../context/AggContext"

const ItemDetail = ({ producto }) => {
  
const [carrito, setCarrito] = useContext(CartContext);
const [agregado, setAgregado] = useContext(AggContext);


  const onAdd = (contador) => {
    
    let f =false;
    carrito.forEach(element => {
      if(element.producto.id === producto.id){
        element.cantidad = element.cantidad + contador;
        f = true;
      }
    });
    if(f === false){
      const NuevoAgregado = {cantidad: contador, producto: producto};
      setCarrito([...carrito,NuevoAgregado])
    }
  setAgregado(true);
    
  };

  return (
      <div>
        <div>
          <div className="row"> 
          <h2 className ="col-12">{producto.nombre}</h2> <img className="img-fluid" src={producto.img} alt={producto.id}/><div className="d-flex flex-column"><p>${producto.precio}</p> <p>Disponibles: {producto.stock}</p><ItemCount
            initial={1}
            min={1}
            max={producto.stock}
            onAdd={onAdd}
            valor={producto.precio}
          /></div>
          </div>
          
        </div>
      </div>
  );
};

export default ItemDetail;
