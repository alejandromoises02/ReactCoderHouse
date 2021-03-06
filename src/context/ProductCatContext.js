import React, { useEffect, useState } from "react";
import {getFirestore} from './../firebase/index';
import { useParams } from "react-router-dom";

export const ProductCatContext = React.createContext([]);

export const ProductCatProvider = ({children}) =>{
    const { categoria } = useParams();

    const [productosC, setProductosC] = useState([]);

useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("productos");
    const categorias = itemCollection.where('categoria', '==', categoria);

    categorias.get().then((response) => {
        if(response.size ===0){
            alert("No existe esta categoria");
        }
        
        const aux = response.docs.map(element =>{
            return {...element.data(), id:element.id};
        });
        setProductosC(aux);
    }) 
},[categoria])




    return <ProductCatContext.Provider value={[productosC, setProductosC]}>
        {children}
    </ProductCatContext.Provider>
}