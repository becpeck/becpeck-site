import Link from 'next/link';
import { HTMLAttributeAnchorTarget, type CSSProperties } from 'react';
import styles from './NavBar.module.css';

type NavLinkProps = {
    href: string,
    text: string,
    style?: CSSProperties,
    target?: HTMLAttributeAnchorTarget,
    rel?: string,
}

export default function NavLink(props: NavLinkProps) {
    const { href, text, style, target, rel } = props;

    return (
        <Link
            href={href}
            style={style}
            target={target}
            rel={rel}
        >
            {text}
        </Link>
    );
}
