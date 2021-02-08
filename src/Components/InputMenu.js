import React from 'react';
// import  f from "../Audio/fa"
import { Row, Col } from 'react-bootstrap';
import fartSound from "../Audio/fart.wav";
import API from "../utils/userAPI";
// const fart = new Audio("fart.wav")
// const fart = new Audio('../Audio/fart.wav');
// import fart from "../Audio/"

const doThing = () => {

    // window.open("", "", "width=200,height=200");
    console.log("yeah");
    let fart = new Audio(fartSound);
    console.log(API.loginUser())
    console.log(fart)
    // document.getElementById("fart").play();
    fart.play();
}


const InputMenu = props => {
    return  <div>
        <audio id="fart">
    <source src="fart"/>
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