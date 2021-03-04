import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import fartSound from "../Audio/fart.wav";
import API from "../utils/userAPI";
import styles from "./InputMenu.module.css";

import Form from "../Components/Inputs";
export default function InputMenu(props) {

    // const ws = new WebSocket(`${process.env.REACT_APP_ENV === 'production' ? 'wss://localhost:8080' : 'ws://localhost:8080'}`);
    const ws = new WebSocket('ws://192.168.1.3:8080');

    const [ state, setState ] = useState({
        text: ''
    });

    const onChange = (e) => {
        let { name, value } = e.target;
        setState({
            ...state,
             [name]: value,
            })
    }


    const doThing = () => {
        let fart = new Audio(fartSound);
        fart.play();
    }

    const postStatus = (e, text) => {
        e.preventDefault();

        doThing();

        if(!text){
            return;
        }

        let message = {
            user: props.user,
            text
        }

        send(message);

    }
    

    const send = (message, callback) => {
        waitForConnection( () => {
            ws.send(JSON.stringify(message));
            setState({ text: ""})        
            if(typeof callback !== 'undefined') {
                callback();
            }    
        }, 1000)
    }


    const waitForConnection = (callback, interval) => {
        if(ws.readyState === 1){
            callback();
        } else {
            setTimeout( () => {
                waitForConnection(callback, interval)
            }, interval)
        }
    }



    // const getStatus = () => {
    //     API.getStatus().then( result => {
    //         setState({ statuses: result.data });
    //     })
    // }

    // useEffect((props) => {
    //         // getStatus()
    // }, [] )


    return  ( 
        <div id={styles.inputMenu}>
            <audio id="fart">
                <source src="fart" />
            </audio>
            <form onSubmit={(e) => postStatus(e, state.text)}>
                <Row>
                    <Col xs="10">
                        <Form.TextInput label="True" name="text" value={state.text} onChange={onChange} />
                    </Col>
                    <Col xs="2">
                        <Form.Button label="Post" />
                    </Col>
                </Row>                    
            </form>
     

        </div>
    )

}
