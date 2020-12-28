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
        if(response.size ===0){
            console.log("No results!");
        }
        /*let aux = response.data();
        aux.push(id);
        console.log(aux);*/
        /*const aux = response.docs.map(element =>{
          return {...element.data(), id:element.id};
            
        });*/
        const aux = response.data();
        
        setProducto(aux);
       })
      
         
        
    },[id]) 


    /*setLoading(true);
    productos.forEach((item) => {
          if (item.id == id) {
            setProducto(item);
          }
        });
        setLoading(false);
      
  }, [id]);*/

  return (
    <>
      {loading && <span>Cargando...</span>}
      {!loading && <ItemDetail producto={producto} />}
    </>
  );
};

export default ItemDetailContainer;
