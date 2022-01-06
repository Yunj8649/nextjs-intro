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
                <a>Home</a>
            </Link>
            <Link href="/about">
                <a>About</a>
            </Link>
            <style jsx>
                {`
                    nav {
                        color: tomato;
                    }
                    link {
                        text-decoration: none;
                    }
                `}
            </style>
        </nav>
    )
}