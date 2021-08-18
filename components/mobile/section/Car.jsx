import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Car from '../../3d/Car';
import Lighting from '../../../jsx-utils/ThreeLighting';
import styles from './Car.module.css';

export default function CarSection() {
    return (
        <div className={styles.container}>
            <div className={styles.status}>
                <h3>Connected</h3>
            </div>
            <div className={styles.carModel}>
                <Canvas>
                    <Lighting />
                    <Suspense fallback={null}>
                        <Car />
                    </Suspense>
                </Canvas>
            </div>
            <div className={styles.modernNav}>

            </div>
        </div>
    );
}