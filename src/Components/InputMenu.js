import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import fartSound from "../Audio/fart.wav";
import API from "../utils/userAPI";
import styles from "./InputMenu.module.css";
import Form from "../Components/Inputs";
import Password from './Inputs/Password';




export default function InputMenu() {


    let ws = new WebSocket("ws:localhost:8080");

    ws.onopen = () => {
        console.log("Websocket is connect ....");

        ws.send("connected");

        ws.onmessage = (ev) => {
            console.log(ev)
        }
    }


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

    const postStatus = (status) => {

        console.log(status)

        if(!status.trim().length){
            return;
        }

        ws.send(status)

    }

    const getStatus = () => {
        console.log("HEY")
        API.getStatus().then( result => {
            setState({ statuses: result.data });
            console.log(result)
        })
    }

    useEffect((props) => {

        console.log(props)

        // if(props.state.statuses === state.statuses){
        //     console.log("bro they're the same")
        // }

        getStatus()
    }, [] )


    return  ( 
        <div id={styles.inputMenu}>
            <audio id="fart">
                <source src="fart" />
            </audio>



            {
            state.statuses ? 
            
            state.statuses.map( s => (
                    <div style={{height: "200px", width: "100px;", color: "white"}}>
                        {s.status} SHIT
                    </div>            
                ))
                :
                null
            }
            <Row>
                <Col xs="12">
                    <Form.TextInput name="status" onChange={onChange} />
                </Col>
            </Row>
            <Row>
                <Col xs="4">
                    <Form.Button label="Whore" onClick={() => postStatus(state.status)} />
                </Col>
                <Col xs="4">
                    <Form.Button label="Whore" />
                </Col>
                <Col xs="4">
                    <Form.Button label="Whore" />
                </Col>
            </Row>
            <Row>
                <Col lg="6">what </Col>
            </Row>           

        </div>
    )

}
