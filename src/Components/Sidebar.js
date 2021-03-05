import React from 'react';
import styles from "./Sidebar.module.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const Sidebar = (props) => {
    return (
        <div id={styles.sidebarMain}>
            <Link to="/general"><p className={styles.sideBarLink}>General</p></Link>
            <Link to="/fun"><p className={styles.sideBarLink}>Fun</p></Link>
        </div>
    )
}

export default Sidebar;