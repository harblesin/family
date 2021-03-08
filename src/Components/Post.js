import React, { Compoenent } from "react";
import { Col } from 'react-bootstrap';
import styles from './Post.module.css';
import alt from "../Images/download.png";



const Post = (props) => {

    return (
        <div>
            <Col xs={{ span: 12 }}>
                <div className={styles.post}>
                    <img src={props.image ? props.image : alt} className={styles.postImage} />
                    <p className={styles.postUser}>{props.user}</p>
                    <p className={styles.postTimestamp}>{props.timestamp}</p>
                    <p className={styles.postBody}>{props.body}</p>
                </div>
            </Col>
        </div>
    )
}

export default Post