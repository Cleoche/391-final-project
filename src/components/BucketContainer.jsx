import {Canvas} from "@react-three/fiber";
import {Model} from "./Bucket.jsx";
import styled from "styled-components";
import {useContext} from "react";
import ColorContext from "./ColorContextProvider.jsx";

const BucketWrapper = styled.div`
    height: 50vh;
    width: 50%;
    margin: auto;
`;

export default function BucketContainer(){

    const { color } = useContext(ColorContext);

    return(
        <BucketWrapper>
            <Canvas>        {/*All animated models must be EXPORTED into a canvas*/}
                <directionalLight position={[0, 0, 2]} intensity={2.7}/>
                <ambientLight intensity={0.8}/>
                <Model position={[0, 0, 3]} color={color}/>
            </Canvas>
        </BucketWrapper>
    )
}