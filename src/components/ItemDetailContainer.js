import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import {getFirestore} from './../firebase/index';

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(false);
  /*const [productos, setProductos] = useContext(ProductContext);*/

  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("productos");
    const idItem = itemCollection.doc(id);

    idItem.get().then((response) => {

      if(response.exists){
        setProducto({id:response.id, ...response.data() });
      } else {
        alert("No se encontro el producto.");
      }
       });
    },[id]) 

  return (
    <>
      {loading && <span>Cargando...</span>}
      {!loading && <ItemDetail producto={producto} />}
    </>
  );
};

export default ItemDetailContainer;
