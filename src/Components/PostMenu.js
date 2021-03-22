import React, { Component, useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import styles from './PostMenu.module.css';
import Form from '../Components/Inputs';
import API from "../utils/userAPI";

const PostMenu = (props) => {


    const [ text, setText] = useState();
    const [ file, setFile ] = useState();

    const onChange = (e) => {
        let { name, value } = e.target;
        setText({ [name]: value });
    }

    const handleFile = (e) => {
        setFile(e.target.files[0]);
    }

    const sendUpload = async (e) => {
        e.preventDefault();
        let post = new FormData();
        if(file) {
            post.append('postBody', text.text);
            let imageName = new Date().getTime()+ `-` + file.name;        
            post.append('file', file, imageName);    
            await API.upload( post );    
        } else {
            await API.createPost( { postBody: text.text } )
        }
        props.refresh();
    }

    return (
        <div className={styles.div}>
            <form>
                <Row>
                    <Col xs={{ span: 12 }}>
                        <Form.TextArea label='text' name='text' onChange={onChange} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.FileUpload name="image" onChange={handleFile} />
                    </Col>
                    <Col xs={{ span: 3 }}>
                        <Form.Button label='Post' onClick={sendUpload} />
                    </Col>
                </Row>
            </form>
        </div>
    )
}

export default PostMenu;