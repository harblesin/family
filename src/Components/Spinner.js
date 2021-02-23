import React from 'react';
import styles from './Spinner.module.css';
import logo from "../Images/homepagelogo.png";


const Spinner = props => {
    return (
        <div className={styles.loginSpinner}>
            <h1 className={styles.h1}>Jus chcking to ese if things are chil . . . </h1>
            <img src={logo} className={styles.loadingSpinner} alt="Spinning logo" />
        </div>       
    )
}

export default Spinner;