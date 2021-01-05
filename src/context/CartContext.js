import React, { useState } from 'react';

export const CartContext = React.createContext([]);

export const CartProvider = ({children}) =>{

    const [carrito, setCarrito] = useState([])

    return <CartContext.Provider value={[carrito, setCarrito]}>
        {children}
    </CartContext.Provider>
}