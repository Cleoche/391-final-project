import styled from 'styled-components';

const StyledFooter = styled.footer`
    padding: 2%;
`;

export default function Footer() {
    return(
        <StyledFooter>
            <p>&#169; 2024 Cl&#233;o Thor and Paige Li. All Rights Reserved.</p>
            <a
                href={`https://sketchfab.com/3d-models/paint-bucket-a1babccfb597490e84dc407a1e47a7fb`}
                title={`3d model credit`}
                target="_blank"
            >3d model credit</a>
        </StyledFooter>
    )
}