import {createGlobalStyle} from 'styled-components';
import BucketContainer from "./components/BucketContainer.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        width: 100%;
    }
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header/>
      <BucketContainer/>
      <Footer/>
    </>
  )
}
