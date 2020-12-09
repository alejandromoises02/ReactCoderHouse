import React, { useEffect, useState } from "react";
import {getFirestore} from './../firebase/index';

export const ProductContext = React.createContext([]);

export const ProductProvider = ({children}) =>{

    const [productos, setProductos] = useState([]);

useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("productos");

    itemCollection.get().then((response) => {
        if(response.size ===0){
            console.log("No results!");
        }
        
        const aux = response.docs.map(element =>{
            console.log(element.data());
            return element.data()
        });
        setProductos(aux);
    }) 
}, [])




    return <ProductContext.Provider value={[productos, setProductos]}>
        {children}
    </ProductContext.Provider>
}