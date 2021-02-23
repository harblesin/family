import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import fartSound from "../Audio/fart.wav";
import API from "../utils/userAPI";
import styles from "./InputMenu.module.css";
import Form from "../Components/Inputs";

export default function InputMenu(props) {


    const ws = new WebSocket("ws:localhost:8080");

    const [ state, setState ] = useState({});

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

    const postStatus = (e, status) => {
        e.preventDefault();

        doThing();

        if(!status.trim().length){
            return;
        }

        let message = {
            user: props.user,
            status
        }

        ws.send(JSON.stringify(message));
        setState({ status: "" })

    }

    const getStatus = () => {
        API.getStatus().then( result => {
            setState({ statuses: result.data });
        })
    }

    useEffect((props) => {
        // ws.onopen = () => {
        //     ws.send("connected");
        // }
            getStatus()
    }, [] )


    return  ( 
        <div id={styles.inputMenu}>
            <audio id="fart">
                <source src="fart" />
            </audio>
            <form onSubmit={(e) => postStatus(e, state.status)}>
                <Row>
                    <Col xs="12">
                        <Form.TextInput name="status" value={state.status} onChange={onChange} />
                    </Col>
                </Row>
                <Row>
                    <Col xs="4">
                        <Form.Button label="Post" />
                    </Col>
                </Row>
                <Row>
                    <Col lg="6">what </Col>
                </Row>                      
            </form>
     

        </div>
    )

}
