import styled, {createGlobalStyle} from 'styled-components';
import BucketContainer from "./components/BucketContainer.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import {ColorContextProvider} from "./components/ColorContextProvider.jsx";
import Input from "./components/ColorMixer.jsx";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        width: 100%;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;

const ComponentWrapper = styled.div`
    display: flex;
    flex-direction: row;
    @media screen and (max-width: 700px) {
        flex-direction: column;
    }
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header/>
        <ComponentWrapper>
            <ColorContextProvider>
                <Input/>
                <BucketContainer/>
            </ColorContextProvider>
        </ComponentWrapper>
      <Footer/>
    </>
  )
}
