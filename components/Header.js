import React from 'react'
import Link from 'next/link';
import styles from '../styles/Header.module.css'
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div 
        className={styles.link}
        onClick = {handleHomeRoute}
      >
        Home
      </div>
      <div className={styles.linkContainer}>
        <div className={styles.link}>
          <Link href='/random-meal'>Meal Randomizer</Link>
        </div>
        <div className={styles.link}>
          <Link href='/categories'>Categories</Link>
        </div>
      </div>
    </div>
  )
}

export default Header;
