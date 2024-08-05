import {Canvas} from "@react-three/fiber";
import {Model} from "./Bucket.jsx";
import styled from "styled-components";
import {useContext} from "react";
import ColorContext from "./ColorContextProvider.jsx";

const BucketWrapper = styled.div`
    height: 400px;
    width: 50%;
    margin: 0 auto;
    padding: 0;
`;

export default function BucketContainer(){

    const { color } = useContext(ColorContext);

    return(
        <BucketWrapper>
            <Canvas>        {/*All animated models must be EXPORTED into a canvas*/}
                <directionalLight position={[0, 0, 2]} intensity={2.7}/>
                <ambientLight intensity={0.8}/>
                <Model position={[0, 0.1, 3.5]} color={color}/>
            </Canvas>
        </BucketWrapper>
    )
}