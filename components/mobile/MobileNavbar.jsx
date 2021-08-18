import { useState } from 'react';
import Image from 'next/image';
import layoutStyles from './MobileView.module.css';
import styles from './MobileNavbar.module.css';

export default function MobileNavbar({ toggleFullScreen }) {
    return (
        <div className={layoutStyles.mobileNavbarContainer}>
            <Image src="/dedanmotor.svg" width="80" height="80" onClick={toggleFullScreen} />
        </div>
    );
};