import {Canvas} from "@react-three/fiber";
import {Model} from "./Bucket.jsx";

export default function BucketContainer(){
    return(
        <>
            <Canvas>
                <directionalLight position={[0, 0, 3]}/>
                <Model position={[0, 0, 0]} color={'green'}/>
            </Canvas>
        </>
    )
}