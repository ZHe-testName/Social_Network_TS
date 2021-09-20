import React, { ComponentType } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";

import { AppStateType } from "../redux/redux-store";
//HOC = high order component
//хоки это функции которые используються для создания компонент-оберток
//они принимают компоненту и возвпащают контейекрную компоненту
//в котрую обернута переданая и выполняют однотипную грязную работу
//такую как обращеня на сервак аутентификация т.п.

type MapStateToPropsForRedirectType = {
    isAuth: boolean,
};

const MapStateToPropsForRedirect = (state: AppStateType): MapStateToPropsForRedirectType => ({
    isAuth: state.auth.isAuth,
});

export function withAuthReadirect<T>(Component: ComponentType<T>) {
    
    const RedirectComponent = (props: MapStateToPropsForRedirectType) => {
        const {isAuth, ...restProps} = props;

        if (!isAuth) return <Redirect to='/login'/>;

        return <Component {...restProps as T}/>;
    };

    const ConectedAuthRedirectComponent = connect(MapStateToPropsForRedirect)(RedirectComponent);

    return ConectedAuthRedirectComponent;
};