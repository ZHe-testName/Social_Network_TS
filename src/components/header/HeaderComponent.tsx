import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import {AuthStateType, DataObjectType, getUserAuthDataThunkCreator, logoutThunkCreator} from "../../redux/reducers/auth-reducer";
import { AppStateType } from "../../redux/redux-store";

type MapStateToProps = {
    data: AuthStateType,
};

type MapDispatchPropsType = {
    getUserAuthDataThunkCreator: () => void,
    logoutThunkCreator: () => void,
};

type AuthPropsType = MapStateToProps & MapDispatchPropsType;


class HeaderResponceContainer extends React.Component<AuthPropsType, DataObjectType> {
    componentDidMount() {
        this.props.getUserAuthDataThunkCreator();
    }

    render (){
        return <Header {...{    
                            isAuth: this.props.data.isAuth, 
                            login: this.props.data.login,
                            logout: this.props.logoutThunkCreator
                        }}/>
    }
};

const mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        data: state.auth
    }
};

export const HeaderContainer = connect(mapStateToProps, {
                                                            getUserAuthDataThunkCreator,
                                                            logoutThunkCreator,
                                                        })(HeaderResponceContainer);