import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';

export default function MobileView(props) {
    return (
        <div className={styles.container}>
            <Image src="/dedanmotor.svg" width="300" height="300" />
        </div>
    );
}