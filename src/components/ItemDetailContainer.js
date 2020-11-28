import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import GetlistaProductos from "./ItemList";

const ItemDetailContainer = () => {
  const [productos, setProductos] = useState([]);
  const [producto, setProducto] = useState({});

  


  useEffect(() => {
    /*const fetchProduct = async () => {
      const listaProductosJson = await GetlistaProductos();
      const productos = JSON.parse(listaProductosJson);
      setProductos(productos);
    }
    fetchProduct()*/
    GetlistaProductos().then((res)=> JSON.parse(res)).then((data)=>{setProductos(data)})
  },[]);

  
  const { id } = useParams();

  productos.forEach((item) => {
    if (item.id === Number(id)) {
      setProducto(item);
    }
  });

  return <ItemDetail producto={producto} />;
};

export default ItemDetailContainer;
