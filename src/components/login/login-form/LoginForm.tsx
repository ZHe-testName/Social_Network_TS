import React from "react";
import classes from "./login_form.module.css";

function LoginForm(props: any) {
    return (
        <form 
            className={classes.form}>
                <input type="text" placeholder='Login'/>
                <input type="text" placeholder='Password'/>

                <div>                        
                    <label htmlFor="remember">Remember me</label>

                    <input type="checkbox" id="remember"/>
                </div>

                <button>
                    Send
                </button>
        </form>
    );
};

export default LoginForm;