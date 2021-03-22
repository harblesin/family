import React, { Compoenent } from "react";
import { Col } from 'react-bootstrap';
import styles from './Post.module.css';
import alt from "../Images/download.png";



const Post = (props) => {

    const openImage = () => {
        if(!props.image){
            return
        }
        let win = window.open("about:blank");
        let image = new Image();
        image.src = `http://localhost:8080/post_images/${props.image}`;
        win.document.write(image.outerHTML)
    }

    return (
        <div>
            <Col xs={{ span: 12 }}>
                <div className={styles.post}>
                    <img src={props.image ? `http://localhost:8080/post_images/${props.image}` : alt} className={styles.postImage} onClick={openImage} />
                    <p className={styles.postUser}>{props.user}</p>
                    <p className={styles.postTimestamp}>{props.timestamp}</p>
                    <div className={styles.postBodySection}>
                        <p className={styles.postBody}>{props.body}</p>
                    </div>
                </div>
            </Col>
        </div>
    )
}

export default Post