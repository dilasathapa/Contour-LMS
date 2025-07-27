'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import styles from '../styles/Navbar.module.css';
import Image from 'next/image';
import logo from "../assets/logos/contour-logo.svg"
import { BsSearch } from "react-icons/bs";
import { BsPersonSquare } from "react-icons/bs";

export default function Navbar() {
  const pathname = usePathname();

  const isAuthPage = pathname === '/login' || pathname === '/signup';

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image src={logo} alt="contour-logo" />
      </div>

      {!isAuthPage && (
        <>
        <div className={styles.navsearchcontainer}>
          <p><BsSearch /></p>
          <input
            type="text"
            placeholder="Search lectures..."
            className={styles.searchBar}
            />
        </div>
        <div className={styles.navProfileIcon}>
          <p><BsPersonSquare /></p>
        </div>
        </>
      )}
    </nav>
  );
}
