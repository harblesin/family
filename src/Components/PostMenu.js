import React, { Component, useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import styles from './PostMenu.module.css';
import Form from '../Components/Inputs';
import API from "../utils/userAPI";

const PostMenu = (props) => {


    const [ status, setStatus] = useState();
    const [ file, setFile ] = useState();

    const onChange = (e) => {
        let { name, value } = e.target;
        setStatus({ [name]: value });
    }

    const handleFile = (e) => {
        setFile(e.target.files[0]);
    }

    const sendUpload = (e) => {
        e.preventDefault();
        let uploadFile = new FormData();
        uploadFile.append('file', file);
        uploadFile.append('status', status.status);
        // let newStatus = status.status;
        let image = new Date().getTime() + `-` + file.name;
        uploadFile.append('filename', image);
        // console.log(new Date().getTime())
        API.upload( uploadFile );
        props.refresh();
    }

    return (
        <div className={styles.div}>
            <form>
                <Row>
                    <Col xs={{ span: 12 }}>
                        <Form.TextArea label='status' name='status' onChange={onChange} />
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