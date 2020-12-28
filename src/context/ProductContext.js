import React, { useContext, useEffect, useState } from "react";
import {getFirestore} from './../firebase/index';
import {CartContext} from "../context/CartContext";

export const ProductContext = React.createContext([]);

export const ProductProvider = ({children}) =>{
    const [carrito, setCarrito] = useContext(CartContext);

    const [productos, setProductos] = useState([]);

useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("productos");
    const destacado = itemCollection.where('destacado', '==', true);

    destacado.get().then((response) => {
        if(response.size ===0){
            console.log("No results!");
        }
        
        const aux = response.docs.map(element =>{
            return {...element.data(), id:element.id};
        });
        setProductos(aux);
    }) 
}, [carrito])




    return <ProductContext.Provider value={[productos, setProductos]}>
        {children}
    </ProductContext.Provider>
}