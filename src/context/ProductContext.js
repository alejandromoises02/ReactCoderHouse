import React, { useState } from 'react';

export const ProductContext = React.createContext([]);

/*useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("productos");

    itemCollection.get().then((response) => {
        console.log(response);
        response.docs.map(element =>{
            console.log(element.data())
            return element.data
        })
    })
    
}, [])*/




export const ProductProvider = ({children}) =>{

    const [item, setItem,] = useState([]);

    
    return <ProductContext.Provider value={[item, setItem]}>
        {children}
    </ProductContext.Provider>
}