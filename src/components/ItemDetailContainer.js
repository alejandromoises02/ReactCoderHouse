import { useEffect, useState } from 'react';
import getItem from  './ItemList';
import ItemCount from './ItemCount';
import ItemDetail from './ItemDetail';




const ItemDetailContainer =()=>{

  const [producto, setProducto]=useState([]);

  useEffect(() => {
    const Item = getItem();

    Item.then((result)=>{
        setProducto(result);
        
    })
    
  }, [])

  return (

    <ItemDetail prod={producto}/>
    
)

}

export default ItemDetailContainer;