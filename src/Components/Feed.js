import React, { Component } from 'react';
import styles from "./Feed.module.css";

class Feed extends Component {

    state = {
        messages: []
    }

    componentDidMount = () => {
        const ws = new WebSocket(`ws://localhost:8080`);
        ws.onopen = () => {
            ws.onmessage = (ev) => {
                let { user, text } = JSON.parse(ev.data);
                let { messages } = this.state;
                messages.push({ user, text });
                this.setState({ messages }, () => {
                    let element = document.getElementById("feed");
                        element.scrollTop = element.scrollHeight;
                });
            }
        }
    }

    render = () => {
        return (
            <div id="feed" className={styles.div}>
                {this.state.messages.map( (m, index) => (
                    <div key={index} className={styles.message}>
                        <p className={styles.user}>{m.user}:</p><p className={styles.text}>{m.text}</p>
                    </div>
                    
                ))}
            </div>               
        )      
    }

}

export default Feed;