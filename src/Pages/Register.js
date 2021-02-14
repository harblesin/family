import React from "react";
import styles from "./RegisterPage.module.css";
import RegisterWindow from "../Components/RegisterWindow";

const Register = (props) => {
    return (
        <div id={styles.registerPageBody}>
            <RegisterWindow />
        </div>
    )
}

export default Register;