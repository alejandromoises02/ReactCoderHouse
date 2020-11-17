import React, { useState } from "react";
import CartIcon from './CartIcon';

const Itemcount = ({initial, min, max, onAdd}) => {

    let costo = 0;
    let valor = 1000;
    
    const [contador, setContador] = useState(initial);
    
    const agregueAlContador = () => {
        if(contador < max){
            setContador(contador + 1);
        }
        
      };
    
      const restarAlContador = () => {
          if(contador > min){
            setContador(contador - 1);
          }
      };

      const agregueAlCarrito = () => {
          
        costo=contador*valor;
        console.log(costo);
        onAdd(costo);
    };
    


    return (
        <div class="card">
            <button onClick={(e) => restarAlContador(e)}> - </button>
            <input placeholder="cantidad" type="number" value={contador} />
            <button onClick={(e) => agregueAlContador(e)}> + </button>
            <button onClick={(e) => agregueAlCarrito(e)}> Agregar al carrito </button>
        </div>
    )

}

export default Itemcount;





