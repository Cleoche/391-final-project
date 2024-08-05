import styled from "styled-components";

const StyledHeader = styled.header`
    padding: 2%;
    h1 {
        margin-bottom: 1%;
    }
    @media screen and (max-width: 700px) {
        justify-content: center;
        text-align: center;
    }
`;

export default function Header() {
    return(
        <StyledHeader>
            <h1>Color Mixer</h1>
            <p>Enter two RGB colors and see their combined output!</p>
        </StyledHeader>
    )
}