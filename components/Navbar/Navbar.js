import Link from "next/link";
import styles from './Navbar.module.css'


export default function Navbar(){

    return(
        <nav className={styles.navbar}>
            <Link href="/">
                <a>Accueil</a>
            </Link>
            <Link href="/blog/article">
                <a>&nbsp;Mon Blog</a>
            </Link>
            <Link href="/contact">
                <a>&nbsp;Contact</a>
            </Link>
        </nav>
    )
}