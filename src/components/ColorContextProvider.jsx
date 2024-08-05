/*
* Created by Cleo
* Context Provider for passing color prop between components
*/

import {createContext, useState} from 'react';

const ColorContext = createContext(); // creating context
export default ColorContext;

export function ColorContextProvider({ children }) {
    // useState to make color prop and the function to set it
    const [color, setColor] = useState('lightgray');

    return (
        <ColorContext.Provider value={{color, setColor}}>
            {children}
        </ColorContext.Provider>
    );
}
