import React from "react";
import LoginReduxForm, { LoginFormFieldsType } from "./login-form/LoginForm";

function Login() {
    const onSubmit = (formData: LoginFormFieldsType) => {
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