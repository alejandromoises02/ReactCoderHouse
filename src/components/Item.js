import { useEffect, useState } from 'react';
import GetlistaProductos from  './ItemList';

const Item =()=>{

  const [productos, setProductos]=useState([]);

  useEffect(async() => {
    const listaProductosJson = await GetlistaProductos();
    const productos = JSON.parse(listaProductosJson);
    setProductos(productos);
  }, [])


return (
  <>
  {productos.length === 0 ? (
    <div>Espere un momento...</div>
  ) : (
    <div class="card">{productos.map((element, index) => (<p>{element.id} {element.name} {element.precio} {element.stock}</p>))}</div>
  )
  }
</>
)
}
          
export default Item;