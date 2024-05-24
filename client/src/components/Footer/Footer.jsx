import React from 'react';
import {BsFacebook, BsTwitter, BsLinkedin, BsInstagram} from "react-icons/bs"
import styles from "./Footer.module.css"

const Footer = () => {
    return (
      <footer className={styles.footer}>
        <div className={styles.waves}>
          <div className={`${styles.wave} ${styles.wave1}`} id="wave1"></div>
          <div className={`${styles.wave} ${styles.wave2}`} id="wave2"></div>
          <div className={`${styles.wave} ${styles.wave3}`} id="wave3"></div>
          <div className={`${styles.wave} ${styles.wave4}`} id="wave4"></div>
        </div>
        <ul className={styles.social_icon}>
          <li className={styles.social_icon__item}>
            <a className={styles.social_icon__link} href="#">
              <BsFacebook />
            </a>
          </li>
          <li className={styles.social_icon__item}>
            <a className={styles.social_icon__link} href="#">
              <BsTwitter />
            </a>
          </li>
          <li className={styles.social_icon__item}>
            <a className={styles.social_icon__link} href="#">
              <BsLinkedin />
            </a>
          </li>
          <li className={styles.social_icon__item}>
            <a className={styles.social_icon__link} href="#">
              <BsInstagram />
            </a>
          </li>
        </ul>
        <ul className={styles.menu}>
          <li className={styles.menu__item}>
            <a className={styles.menu__link} href="#">
              Home
            </a>
          </li>
          <li className={styles.menu__item}>
            <a className={styles.menu__link} href="#">
              About
            </a>
          </li>
          <li className={styles.menu__item}>
            <a className={styles.menu__link} href="#">
              Services
            </a>
          </li>
          <li className={styles.menu__item}>
            <a className={styles.menu__link} href="#">
              Contact
            </a>
          </li>
        </ul>
        <p>&copy;2024 ShoeStore. | Shoes of ukraine</p>
      </footer>
    );
  };
  
  export default Footer;