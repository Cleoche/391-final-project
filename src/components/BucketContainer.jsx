import {Canvas} from "@react-three/fiber";
import {Model} from "./Bucket.jsx"

export default function BucketContainer(){
    return(
        <>
            <Canvas>
                <Model />
            </Canvas>
        </>
    )
}