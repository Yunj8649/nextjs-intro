import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import styles from './NavBar.module.css';

export default function NavBar() {
    const route = useRouter();
    console.log(route);
    console.log(route.pathname)
    return (
        <nav>
            <Link href="/">
                <a className={`${styles.link} ${route.pathname === '/' ? styles.active : ''}`}>Home</a>
            </Link>
            <Link href="/about">
                <a className={[styles.link, route.pathname === '/about' ? styles.active : ''].join(' ')}>About</a>
            </Link>
        </nav>
    )
}