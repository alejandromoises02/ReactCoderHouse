import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';




const ItemDetailContainer =()=>{

  const { id } = useParams();

  useEffect(() =>{
    console.log(id);
  },[id])

  return (
    <ItemDetail ide={id}/>
    
    
)

}

export default ItemDetailContainer;

