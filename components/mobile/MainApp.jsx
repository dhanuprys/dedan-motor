import { useRouter } from 'next/router';
import Settings from './section/Settings';
import CarSection from './section/Car';
import GamePad from './section/GamePad';
import layoutStyles from './MobileView.module.css';
import styles from './MainApp.module.css';

export default function MainApp() {
    const router = useRouter();
    let UsedUI = null;

    switch (router.query.sectionType) {
        case 'settings':
            UsedUI = <Settings />;
            break;
        case 'gamepad':
            UsedUI = <GamePad />;
            break;
        default:
            UsedUI = <CarSection />;
    }

    return (
        <div className={layoutStyles.mainAppContainer}>
            {UsedUI}
        </div>
    );
}