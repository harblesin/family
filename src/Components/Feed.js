import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import styles from "./Feed.module.css";
import Form from "../Components/Inputs"
import alt from "../Images/download.png";

class Feed extends Component {

    state = {
        posts: [
            { user: "Frank", body: "I can't stop farting and everyone is mad at me :(", timestamp: "12:23 am", imgage: null },
            { user: "weedLord240", body: "This bitch won't stop farting on the bus right now", timestamp: "12:22 am", image: null }
        ]
    }

    componentDidMount = () => {
        // const ws = new WebSocket(`${process.env.REACT_APP_ENV === 'production' ? 'wss://pissbitch.club' : 'ws://localhost:8080'}`);
        // ws.onopen = () => {
        //     ws.onmessage = (ev) => {
        //         let { user, text } = JSON.parse(ev.data);
        //         let { messages } = this.state;
        //         messages.push({ user, text });
        //         this.setState({ messages }, () => {
        //             let element = document.getElementById("feed");
        //                 element.scrollTop = element.scrollHeight;
        //         });
        //     }
        // }
    }

    render = () => {
        return (
            <div id="feed" className={styles.div}>
                <Row className={styles.postMenu}>
                    <Col xs={{span : 9}}>
                        <Form.TextInput label="Status" />
                    </Col>
                    <Col xs={{span: 3}}>
                        <Form.Button label="Post" />
                    </Col>
                </Row>
                <Row>
                    {this.state.posts.map( p => (
                        <Col xs={{span: 12}}>
                            <div className={styles.post}>
                                <img src={p.image ? p.image : alt} className={styles.postImage} />
                                <p className={styles.postUser}>{p.user}:</p>
                                <p className={styles.postBody}>{p.body}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>               
        )      
    }

}

export default Feed;