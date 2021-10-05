import React from "react";
import LoginReduxForm from "./login-form/LoginForm";

function Login(props: any) {
    const onSubmit = (formData: any) => {
        console.log(formData);
    };

    return (
        <>
            <h1>
                LOGIN
            </h1>

            <LoginReduxForm onSubmit={onSubmit}/>
        </>
    );
};

export default Login;