import React from "react";
import { connect } from "react-redux";
import { loginThunkCreator } from "../../redux/reducers/auth-reducer";
import { AppStateType } from "../../redux/redux-store";
import LoginReduxForm, { LoginFormFieldsType } from "./login-form/LoginForm";

type MapDispatchToPropsType = {
    loginThunkCreator: (formData: LoginFormFieldsType) => void,
};

type MapStateToPropsType = {
    isAuth: boolean,
};

function LoginComponent(props: MapDispatchToPropsType) {
    const onSubmit = (formData: LoginFormFieldsType) => {
        props.loginThunkCreator(formData);
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

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
    };
};

const Login = connect(mapStateToProps, {loginThunkCreator})(LoginComponent);

export default Login;