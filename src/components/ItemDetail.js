import React, { useContext, useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import {CartContext} from "../context/CartContext"
import {AggContext} from "../context/AggContext"

const ItemDetail = ({ producto }) => {
  
const [carrito, setCarrito] = useContext(CartContext);
const [agregado, setAgregado] = useContext(AggContext);
const [TallaE, setTallaE] = useState("");
const [ColorE, setColorE] = useState("");

useEffect(() => {
  setTallaE(producto.TallaE);
  setColorE(producto.ColorE);
  },[producto]) 

const InputTalla= (event) => {
  setTallaE(event.target.value);
}

const InputColor= (event) => {
  setColorE(event.target.value);
}


  const onAdd = (contador) => {

    let f = false;
    carrito.forEach(element => {
      if(element.producto.id === producto.id && element.Talla === TallaE && element.Color === ColorE){
        element.cantidad = element.cantidad + contador;
        f = true;
      }
    });
    if(f === false){
      const newItem = {
        cantidad: contador,
        producto: producto,
        Color: ColorE,
        Talla: TallaE,
      };
      setCarrito([...carrito,newItem])
      
    }
  setAgregado(true);
    
  };

  return (
      <div>
        <div>
          <div className="row"> 

          <img className="img-fluid col-3" src={producto.img} alt={producto.id}/>

          <div className ="col-3">

          <h2>{producto.nombre}</h2> 

          <div className="d-flex flex-column">
            <p>Precio: ${producto.precio}</p> 

            <div className="containerColor d-flex justify-content-between align-items-baseline">
              <p>Color</p>
              <select className="form-control color" onChange={InputColor} >
              {producto?.Color?.map((element, index) => 
                <option key={index} value={element}>{element}</option>)}
              </select>
            </div>

            <div className="containerColor d-flex justify-content-between align-items-baseline">
              <p>Talla</p>
              <select className="form-control color" onChange={InputTalla} >
              {producto?.Talla?.map((element, index) => 
                <option key={index} value={element}>{element}</option>)}
              </select>
            </div>

            <p>Disponibles: {producto.stock}</p><ItemCount
            initial={1}
            min={1}
            max={producto.stock}
            onAdd={onAdd}
            valor={producto.precio}
          />
          </div>
          </div>
          </div>
          
        </div>
      </div>
  );
};

export default ItemDetail;

