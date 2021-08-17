import { useState, useEffect } from 'react';
import Image from 'next/image';
import MobileNavbar from './MobileNavbar';
import styles from './MobileView.module.css';

function BootUp() {
    return (
        <div className={styles.centerBox}>
            <Image width="200" height="200" src="/dedanmotor.svg" />
        </div>
    );
}

export default function MobileView() {
    const [ bootState, setBootState ] = useState(false);

    if (!bootState) {
        setTimeout(() => {
            setBootState(true);
        }, 3000);

        return <BootUp />;
    }

    return (
        <MobileNavbar />
    );
}