import React from 'react';
import styles from './FileUpload.module.css';

const FileUpload = props => {
    return (
        <div className={styles.div}>
            <input className={styles.input} type="file" name={props.name} onChange={props.onChange} />
        </div>
    )
}

export default FileUpload;