'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import styles from '../styles/Navbar.module.css';
import Image from 'next/image';
import logo from "../assets/logos/contour-logo.svg"

export default function Navbar() {
  const pathname = usePathname();

  // If user is on login or signup page, show only logo
  const isAuthPage = pathname === '/login' || pathname === '/signup';

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image src={logo} alt="contour-logo" />
      </div>

      {!isAuthPage && (
        <input
          type="text"
          placeholder="Search lectures..."
          className={styles.searchBar}
        />
      )}
    </nav>
  );
}
