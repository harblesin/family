import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import styles from "./Feed.module.css";
import Form from "../Components/Inputs"
import Post from "../Components/Post";
import PostMenu from '../Components/PostMenu';

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
                <PostMenu />
                {this.state.posts.map(p => (
                    <Post user={p.user} body={p.body} image={p.image} timestamp={p.timestamp} />
                ))}
            </div>
        )
    }

}

export default Feed;