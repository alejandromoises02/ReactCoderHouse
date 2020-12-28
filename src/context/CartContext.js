import React, { useState } from 'react';

export const CartContext = React.createContext([]);

export const CartProvider = ({children}) =>{

    const [carrito, setCarrito] = useState([])

    console.log(carrito);
    return <CartContext.Provider value={[carrito, setCarrito]}>
        {children}
    </CartContext.Provider>
}