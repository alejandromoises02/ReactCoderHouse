import React, { useState } from "react";

const Itemcount = ({initial, min, max, onAdd}) => {
  // eslint-disable-next-line no-unused-vars
  let costo = 0;

  const [contador, setContador] = useState(initial);

  const agregueAlContador = () => {
    if (contador < max) {
      setContador(contador + 1);
    }
  };

  const restarAlContador = () => {
    if (contador > min) {
      setContador(contador - 1);
    }
  };

 

  return (
    <div className="d-flex flex-column">
      <div>
      <button onClick={(e) => restarAlContador(e)}> - </button>
      <input placeholder="cantidad" type="number" value={contador} />
      <button onClick={(e) => agregueAlContador(e)}> + </button>
      </div>
      <button
        onClick={() => onAdd(contador)}
      >
        Comprar {contador}
      </button>
    </div>
  );
};

export default Itemcount;
