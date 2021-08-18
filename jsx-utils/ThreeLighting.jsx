import { useRef } from 'react';
import { useHelper } from '@react-three/drei';
import { PointLightHelper } from 'three';

export function KeyLight() {
    const ref = useRef();
    useHelper(ref, PointLightHelper, 1);

    return <pointLight 
        ref={ref} 
        args={[`white`, 1]} 
        position={[-3, 3, 3]} />;
}

export function FillLight() {
    const ref = useRef();
    useHelper(ref, PointLightHelper, 1);

    return <pointLight 
        ref={ref} 
        args={[`white`, 0.15]} 
        position={[3, 1, 3]} />;
}

export function BackLight() {
    const ref = useRef();
    useHelper(ref, PointLightHelper, 1);

    return <pointLight 
        ref={ref} 
        args={[`white`, 0.15]} 
        position={[3, 3, -3]} />;
}

export default function Lighting() {
    return (
        <>
            <KeyLight />
            <FillLight />
            <BackLight />
        </>
    );
}