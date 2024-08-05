import { useState, useContext } from 'react';
import styled from 'styled-components';
import ColorContext from "./ColorContextProvider.jsx";

const StyledInput = styled.input`
    border: black dashed 1px;
    margin: 5px;
`;

const StyledButton = styled.button`
    border-radius: 50%;
    background-color: cadetblue;
    margin: 10px;
`;

const ColorDisplay = styled.div`
    width: 100px;
    height: 100px;
    margin: 10px;
    border: 1px solid black;
`;


export default function Input() {
    const [red1, setRed1] = useState('');
    const [green1, setGreen1] = useState('');
    const [blue1, setBlue1] = useState('');

    const [red2, setRed2] = useState('');
    const [green2, setGreen2] = useState('');
    const [blue2, setBlue2] = useState('');

    const [averagedColor, setAveragedColor] = useState('');
    const [hexColor, setHexColor] = useState('');

    const rgbToHex = (r, g, b) => {
        const toHex = (n) => {
            const hex = n.toString(16);
            return hex.length === 1 ? '0' + hex : hex;
        };
        return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
    };

    const {setColor} = useContext(ColorContext); /*import setColor function from the context provider*/


    const handleSubmit = () => {
        const avgRed = Math.round((parseInt(red1) + parseInt(red2)) / 2);
        const avgGreen = Math.round((parseInt(green1) + parseInt(green2)) / 2);
        const avgBlue = Math.round((parseInt(blue1) + parseInt(blue2)) / 2);

        const color = `rgb(${avgRed}, ${avgGreen}, ${avgBlue})`;
        const hex = rgbToHex(avgRed, avgGreen, avgBlue);

        setAveragedColor(color);
        setHexColor(hex);
        setColor(hex); /*set the color of the bucket*/

    };

    return (
        <div>
            <div>
                <StyledInput
                    placeholder="Red 1"
                    value={red1}
                    onChange={(e) => setRed1(e.target.value)}
                />
                <StyledInput
                    placeholder="Green 1"
                    value={green1}
                    onChange={(e) => setGreen1(e.target.value)}
                />
                <StyledInput
                    placeholder="Blue 1"
                    value={blue1}
                    onChange={(e) => setBlue1(e.target.value)}
                />
            </div>
            <div>
                <StyledInput
                    placeholder="Red 2"
                    value={red2}
                    onChange={(e) => setRed2(e.target.value)}
                />
                <StyledInput
                    placeholder="Green 2"
                    value={green2}
                    onChange={(e) => setGreen2(e.target.value)}
                />
                <StyledInput
                    placeholder="Blue 2"
                    value={blue2}
                    onChange={(e) => setBlue2(e.target.value)}
                />
            </div>
            <StyledButton onClick={handleSubmit}>Calculate Average</StyledButton>
            {averagedColor && (
                <div>
                    <ColorDisplay style={{backgroundColor: averagedColor}}/>
                    <p>{averagedColor}</p>
                    <p>{hexColor}</p>
                </div>
            )}
        </div>
    );
}
