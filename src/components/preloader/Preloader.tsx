import React from "react";

import classes from "./preloader.module.css";
import preloader from "../../imgs/Triangles-1.4s-200px.svg";

const Preloader = () => {
    return (
        <img 
            className={classes.preloader}
            src={preloader}
            alt='preloader'/>
    );
};

export default Preloader;