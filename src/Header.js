import {ReactComponent as Logo} from "./littleLemonLogo.svg"
import styles from "./Header.module.css"
export default function Header() {
    return (
        <>
            <header className={styles.header}>
                <Logo className={styles.logo}/>
                <p>hi</p>
            </header>
        </>
    )
}