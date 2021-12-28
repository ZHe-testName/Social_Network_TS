import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { loginThunkCreator } from "../../redux/reducers/auth-reducer";
import { AppStateType } from "../../redux/redux-store";
import Preloader from "../preloader/Preloader";
import LoginReduxForm, { LoginFormFieldsType } from "./login-form/LoginForm";

type MapDispatchToPropsType = {
    loginThunkCreator: (formData: LoginFormFieldsType) => void,
};

type MapStateToPropsType = {
    isAuth: boolean,
    isLoading: boolean,
};

type PropsType = MapDispatchToPropsType & MapStateToPropsType;

function LoginComponent(props: PropsType) {
    const onSubmit = (formData: LoginFormFieldsType) => {
        props.loginThunkCreator(formData);
    };

    if (props.isAuth){
        return <Redirect to='/profile'/>
    }

    if (props.isLoading){
        return <Preloader />
    }


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
        isLoading: state.auth.isLoading,
    };
};

const Login = connect(mapStateToProps, {loginThunkCreator})(LoginComponent);

export default Login;