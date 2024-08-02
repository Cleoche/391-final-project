import {createContext, useState} from 'react';
import PropTypes from "prop-types";

const ColorContext = createContext();
export default ColorContext;

export function ColorContextProvider({ children }) {
    const [color, setColor] = useState('lightgray');

    return (
        <ColorContext.Provider value={{color, setColor}}>
            {children}
        </ColorContext.Provider>
    );
}