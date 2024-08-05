import { useState } from 'react';
import styled from 'styled-components';

// Styled components for input, button, color display to showcase color, and error messages
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

const ErrorMessage = styled.p`
    color: red;
`;

// The main function for the averaging the two colors
export default function Input() {
    // State hooks for storing RGB values for two sets of color
    const [red1, setRed1] = useState('');
    const [green1, setGreen1] = useState('');
    const [blue1, setBlue1] = useState('');

    const [red2, setRed2] = useState('');
    const [green2, setGreen2] = useState('');
    const [blue2, setBlue2] = useState('');

    // State hook for error messages
    const [errorMessage, setErrorMessage] = useState('');

    // State hook for the computed average color
    const [averagedColor, setAveragedColor] = useState('');
    // State hook for the hex value of the computed average color
    const [hexColor, setHexColor] = useState('');

    // Converting rgb values into hex values
    const rgbToHex = (r, g, b) => {
        const toHex = (n) => {
            const hex = n.toString(16);
            return hex.length === 1 ? '0' + hex : hex;
        };
        return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
    };

    // Handle rgb value inputs and validate the inputs
    const handleRGBChange = (value, setter) => {
        const num = parseInt(value, 10);
        if ((num >= 0 && num <= 255) || value === '') {
            setter(value); //Set the value
            setErrorMessage(''); //Clear error message
        } else {
            //Give error message when there is an input error
            setErrorMessage('Input must be between 0 and 255!!');
        }
    };

    // Calculate average color and update it accordingly
    const handleSubmit = () => {
        //We can calculate if there is no input error
        if (!errorMessage && [red1, green1, blue1, red2, green2, blue2].every(val => val !== '')) {
            const avgRed = Math.round((parseInt(red1) + parseInt(red2)) / 2);
            const avgGreen = Math.round((parseInt(green1) + parseInt(green2)) / 2);
            const avgBlue = Math.round((parseInt(blue1) + parseInt(blue2)) / 2);

            const color = `rgb(${avgRed}, ${avgGreen}, ${avgBlue})`;
            const hex = rgbToHex(avgRed, avgGreen, avgBlue);

            setAveragedColor(color); //update displayed color
            setHexColor(hex);// update the displayed hex value
        }
    };

    // Function to get color for display based on the individual RGB values
    const getColor = (r, g, b) => {
        if (r && g && b && !isNaN(r) && !isNaN(g) && !isNaN(b)) {
            return `rgb(${r}, ${g}, ${b})`;
        }
        return 'transparent';
    };

    return (
        <div>
            <div>
                {/*Input fields for the first set of RGB values */}
                <StyledInput
                    placeholder="Red 1"
                    value={red1}
                    onChange={(e) => handleRGBChange(e.target.value, setRed1)}
                />
                <StyledInput
                    placeholder="Green 1"
                    value={green1}
                    onChange={(e) => handleRGBChange(e.target.value, setGreen1)}
                />
                <StyledInput
                    placeholder="Blue 1"
                    value={blue1}
                    onChange={(e) => handleRGBChange(e.target.value, setBlue1)}
                />
                {/* displays the color */}
                <ColorDisplay style={{ backgroundColor: getColor(red1, green1, blue1) }} />
            </div>
            <div>
                {/*Input fields for the second set of RGB values */}
                <StyledInput
                    placeholder="Red 2"
                    value={red2}
                    onChange={(e) => handleRGBChange(e.target.value, setRed2)}
                />
                <StyledInput
                    placeholder="Green 2"
                    value={green2}
                    onChange={(e) => handleRGBChange(e.target.value, setGreen2)}
                />
                <StyledInput
                    placeholder="Blue 2"
                    value={blue2}
                    onChange={(e) => handleRGBChange(e.target.value, setBlue2)}
                />
                {/* displays the color */}
                <ColorDisplay style={{ backgroundColor: getColor(red2, green2, blue2) }} />
            </div>
            {/*Button to calculate the average color */}
            <StyledButton onClick={handleSubmit}>Calculate Average</StyledButton>
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
            {averagedColor && (
                <div>
                    {/* displays the average color */}
                    <ColorDisplay style={{backgroundColor: averagedColor}}/>
                    <p>{averagedColor}</p>
                    <p>{hexColor}</p>
                </div>
            )}
        </div>
    );
}
