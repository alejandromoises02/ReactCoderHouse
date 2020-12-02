import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import GetlistaProductos from "./ItemList";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    GetlistaProductos()
      .then((result) => JSON.parse(result))
      .then((data) => {
        data.forEach((item) => {
          if (item.id === Number(id)) {
            setProducto(item);
          }
        });
        setLoading(false);
      });
  }, [id]);

  return (
    <>
      {loading && <span>Cargando...</span>}
      {!loading && <ItemDetail producto={producto} />}
    </>
  );
};

export default ItemDetailContainer;
