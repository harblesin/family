import React from "react";
import styles from "../Inputs/Password.module.css";

const Password = props => {
    return (
        <div className={styles.div}>
            <input id={props.id} className={`${props.className} ${styles.input}`} name={props.name} value={props.value} onChange={props.onChange} type="password" />
            <label className={styles.label} for={props.name}>{props.label}</label>            
        </div>
    )
}

export default Password;