import React, { useEffect } from "react";

import { useState , createContext ,useContext } from 'react';


export const valueContext = createContext()

export const useMyContext = () => useContext(valueContext);

export const ValueProvider = ({children})=>{

    const [ startMachine , SetStartMachine ] = useState(false)







    return(
        <valueContext.Provider value = {{
            startMachine , SetStartMachine
        }}>

        {children}
        </valueContext.Provider>
    )
}