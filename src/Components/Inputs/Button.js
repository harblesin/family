import React from "react";
import styles from "./Button.module.css";

const Button = props => {
    return (
        <div className={styles.div}>
            <button className={styles.button} onClick={props.onClick}>{props.label}</button>
        </div>
    )
}

export default Button;