// components/Navbar.tsx

import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css'; // Importing CSS module

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
          <img src="favicon.ico" alt="logo" />
      </div>
      <ul className={styles.navLinks}>
        <li>
            <Link href={'/'}>Home</Link>
        </li>
        <li>
            <Link href={'/about'}>About</Link>
        </li>
        <li>
            <Link href={'/contact'}>Contact</Link>
        </li>
        <li>
            <Link href={'/'}>Roadmap</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
