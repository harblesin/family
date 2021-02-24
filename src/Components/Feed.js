import React, { Component } from 'react';
import styles from "./Feed.module.css";

class Feed extends Component {

    state = {
        messages: []
    }

    componentDidMount = () => {
        let ws = new WebSocket(`ws:localhost:8080`);
        ws.onopen = () => {
            ws.onmessage = (ev) => {
                let { user, status } = JSON.parse(ev.data);
                let { messages } = this.state;
                messages.push({ user, status });
                this.setState({ messages });
            }
        }
    }

    render = () => {
        return (
            <div id="feed" className={styles.div}>
                {this.state.messages.map( (m, index) => (
                    <div key={index} className={styles.message}>
                        <p className={styles.user}>{m.user}:</p><p className={styles.text}>{m.status}</p>
                    </div>
                    
                ))}
            </div>               
        )      
    }

}

export default Feed;