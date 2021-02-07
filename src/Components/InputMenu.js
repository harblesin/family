import React from 'react';
// import  f from "../Audio/fa"
import { Row, Col } from 'react-bootstrap';
// const fart = new Audio("fart.wav")
const fart = new Audio('../Audio/fart.wav');
// import fart from "../Audio/"

const doThing = () => {

    window.open("", "", "width=200,height=200");
    console.log("yeah");

    console.log(fart)
    fart.play();
}


const InputMenu = props => {
    return  <div>
        <audio src="../">

        </audio>
        <div className="flexRow row">
            <input className="s"/>
        </div>
        <div className="flexRow">
            <button onClick={()=> doThing() }>Whore</button>
            <button>Whore</button>
            <button>Whore</button>
        </div>        
        <Row>
            <Col lg="6">what </Col>
        </Row>
    </div>

}

export default InputMenu;