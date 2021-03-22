import React, { Component } from 'react';
import styles from "./Feed.module.css";
import Post from "../Components/Post";
import PostMenu from '../Components/PostMenu';
import API from "../utils/userAPI";

class Feed extends Component {

    state = {
        posts: [
            { user: "Frank", body: "I can't stop farting and everyone is mad at me :(", timestamp: "12:23 am", imgage: null },
            { user: "weedLord240", body: "This bitch won't stop farting on the bus right now", timestamp: "12:22 am", image: null }
        ]
    }

    getPosts = () => {
        API.getPosts().then(result => {
            console.log(result)
            this.setState({ posts: result.data })
        });        
    }

    componentDidMount = () => {
        this.getPosts();
    }

    render = () => {
        return (
            <div id="feed" className={styles.div}>
                <PostMenu refresh={this.getPosts} />
                {this.state.posts.map(p => (
                    <Post user={p.username} body={p.body} image={p.image} timestamp={p.time} />
                ))}
            </div>
        )
    }

}

export default Feed;