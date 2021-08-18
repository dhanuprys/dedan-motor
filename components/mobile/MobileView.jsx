import { useState, useEffect } from 'react';
import Image from 'next/image';
import MobileNavbar from './MobileNavbar';
import FullScreen from '../../jsx-utils/FullScreen';
import MainApp from './MainApp';
import BottomNavigation from './BottomNavigation';
import styles from './MobileView.module.css';

function BootUp() {
    return (
        <FullScreen className={styles.centerBox}>
            <Image width="200" height="200" src="/dedanmotor.svg" />
        </FullScreen>
    );
}

export default function MobileView() {
    const [ bootState, setBootState ] = useState(false);
    const [ isFullScreen, setFullScreen ] = useState(false);

    const toggleFullScreen = () => {
        if (isFullScreen) {
            document.exitFullscreen();
        } else {
            document.documentElement.requestFullscreen();
        }

        setBootState(false);
        setFullScreen(!isFullScreen);
    };

    if (!bootState) {
        setTimeout(() => {
            setBootState(true);
        }, 3000);

        return <BootUp />;
    }

    return (
        <FullScreen className={styles.baseContainer}>
            <MobileNavbar toggleFullScreen={toggleFullScreen} />
            <MainApp />
            <BottomNavigation />
        </FullScreen>
    );
}