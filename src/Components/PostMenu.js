import React, { Component, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import styles from './PostMenu.module.css';
import Form from '../Components/Inputs';

const PostMenu = (props) => {


    const [ status, setStatus] = useState();
    const [ file, setFile ] = useState();

    const onChange = (e) => {
        let { name, value } = e.target;
        setStatus({ [name]: value });
    }

    const handleFile = (e) => {
        let file = e.target.files[0];
        setFile({ file });
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
                        <Form.Button label='Post' />
                    </Col>
                </Row>
            </form>
        </div>
    )
}

export default PostMenu;