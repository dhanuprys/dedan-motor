import styles from './FullScreen.module.css';

export default function FullScreen({ children, components, className, ...optionalProps }) {
    return (
        <div className={styles.fullScreenContainer + (' ' + className || '')} {...optionalProps}>
            {children || components}
        </div>
    );
}