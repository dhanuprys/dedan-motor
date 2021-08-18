import { Canvas } from '@react-three/fiber'
import { Suspense} from 'react';
import Model from '../components/3d/Car';
import Lighting from '../jsx-utils/ThreeLighting';

export default function App() {
    return (
        <Canvas style={{ height: '100vh' }}>
            <Lighting />
            <Suspense fallback={null}>
                <Model position={[0, -20, -120]} />
            </Suspense>
        </Canvas>
    );
}