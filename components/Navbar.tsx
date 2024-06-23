import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>Bodhi Global Analysis</div>
            <div className={styles.hamburger} onClick={toggleMenu}>
                ☰
            </div>
            <ul className={`${styles.navLinks} ${isOpen ? styles.navLinksOpen : ''}`}>
                <li>
                    <Link href="/">About us</Link>
                </li>
                
                <li>
                    <Link href="/services">Services</Link>
                </li>

                <li>
                    <Link href="/about">Projects</Link>
                </li>

                <li>
                    <Link href="/contact">Insights</Link>
                </li>
                <li>
                    <Link href="/jobs">Jobs</Link>
                </li>
                <li>
                    <Link href="/call">Contact Us</Link>
                </li>

            </ul>
        </nav>
    );
};

export default Navbar;
