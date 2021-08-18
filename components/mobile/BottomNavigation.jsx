import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faGamepad, faCar } from '@fortawesome/free-solid-svg-icons';
import styles from './BottomNavigation.module.css';
import layoutStyles from './MobileView.module.css';

function NavIcon({ iconType, target }) {
    const router = useRouter();
    
    return (
        <div className="col" onClick={() => router.replace('/mobile/' + target)}>
            <FontAwesomeIcon className={styles.icon} icon={iconType} />
        </div>
    );
}

export default function BottomNavigation() {
    return (
        <div className={layoutStyles.bottomNavigationContainer}>
            <NavIcon iconType={faCog} target="settings" />
            <NavIcon iconType={faCar} target="car" />
            <NavIcon iconType={faGamepad} target="gamepad" />
        </div>
    );
}