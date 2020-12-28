import React, { useState } from 'react';

export const AggContext = React.createContext([]);

export const AggProvider = ({children}) =>{

    const [agregado, setAgregado] = useState(false)

    
    return <AggContext.Provider value={[agregado, setAgregado]}>
        {children}
    </AggContext.Provider>
}