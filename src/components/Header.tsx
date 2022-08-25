import Logo from '../assets/Logo.svg'
import styles from './Header.module.css'

export function Header() {
    return (
        <div className={styles.content}>
            <img src={Logo} alt="Logo ToDo" />
        </div>
    )
}