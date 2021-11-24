import React from "react";
import { connect } from "react-redux";
import { loginThunkCreator } from "../../redux/reducers/auth-reducer";
import LoginReduxForm, { LoginFormFieldsType } from "./login-form/LoginForm";

type MapDispatchToPropsType = {
    loginThunkCreator: (formData: LoginFormFieldsType) => void;
};

function Login() {
    const onSubmit = (formData: LoginFormFieldsType) => {
        loginThunkCreator(formData);
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

// const Login = connect(null, {loginThunkCreator})(LoginComponent);

export default Login;