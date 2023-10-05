"use client";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import NavLink from './NavLink';
import fonts from '../../styles/fonts';
import styles from './NavBar.module.css';

import { type CSSProperties } from 'react';

export default function NavBar() {

    const titleStyle: CSSProperties = {
        ...fonts.zapfCalligraphic.style,
        fontSize: '30px',
        fontWeight: '700',
    }

    const linkStyle: CSSProperties = {
        ...fonts.zapfCalligraphic.style,
        fontSize: 'large',
        fontWeight: 700,
    }

    // const isCurrentPage = (href: string) => href === pathName;

    return (
        <nav className={styles.NavBar}>
            <h2 id='site-title' style={titleStyle}>
                <NavLink href='/' text='becPeck' />
            </h2>
            <div className={styles.internal}>
                <NavLink href='/projects' style={linkStyle} text='PROJECTS' />
                <NavLink href='/files/c3a37847-6f64-4f48-a6fe-f32332eb1df6.html' style={linkStyle} text='RESUME' target='_blank' rel='noopener noreferrer'/>
            </div>
            <div className={styles.external}>
                <Link href='https://www.github.com/becpeck'>
                    <FontAwesomeIcon icon={faGithub} size='2x'/>
                </Link>
                <Link href='https://www.linkedin.com/in/rebecca-peckman/'>
                    <FontAwesomeIcon icon={faLinkedin} size='2x'/>
                </Link>
            </div>
        </nav>
    );
}
