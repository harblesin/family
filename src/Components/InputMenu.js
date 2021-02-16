import React from 'react';
import { Row, Col } from 'react-bootstrap';
import fartSound from "../Audio/fart.wav";
import API from "../utils/userAPI";
import styles from "./InputMenu.module.css";

const doThing = () => {
    let fart = new Audio(fartSound);
    fart.play();
}


const InputMenu = props => {
    return <div id={styles.inputMenu}>
        <audio id="fart">
            <source src="fart" />
        </audio>
        <div className="flexRow row">
            <input className="s" />
        </div>
        <div className="flexRow">
            <button onClick={() => doThing()}>Whore</button>
            <button>Whore</button>
            <button>Whore</button>
        </div>
        <Row>
            <Col lg="6">what </Col>
        </Row>
    </div>

}

export default InputMenu;