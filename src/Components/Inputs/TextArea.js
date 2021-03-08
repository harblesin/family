import React from "react";
import styles from "../Inputs/TextArea.module.css";

const TextArea = props => {
    return (
        <div className={styles.div}>
            <textarea id={props.id} className={`${props.className} ${styles.input}`} name={props.name} value={props.value} onChange={props.onChange} onBlur={props.onBlur} type="text" />
            <label className={styles.label} htmlFor={props.name}>{props.label}</label>
        </div>
    )
}

export default TextArea;