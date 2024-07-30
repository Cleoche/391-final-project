import {createGlobalStyle} from 'styled-components';
import BucketContainer from "./components/BucketContainer.jsx";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
    }
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BucketContainer/>
    </>
  )
}
