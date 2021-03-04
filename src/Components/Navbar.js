import React from 'react';
import styles from './Navbar.module.css';


const Navbar = (props) => {

    return (
        <div id={styles.navbarMain}>
            <h1 id={styles.webHeader}>PISSBITCH.CLUB</h1>
            <span id={styles.userSpan}>User</span>
        </div>
    )
}

export default Navbar;