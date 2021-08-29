import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import {AuthStateType, DataObjectType, setUserAuthDataActionCreator} from "../../redux/reducers/auth-reducer";
import { AppStateType } from "../../redux/redux-store";

type MapStateToProps = {
    data: AuthStateType,
};

type MapDispatchPropsType = {
    setUserAuthDataActionCreator: (data: AuthStateType) => void,
};

// type HeaderPropsType = {
//     isAuth: boolean,
//     login: string | null,
// };

type AuthPropsType = MapStateToProps & MapDispatchPropsType;


class HeaderResponceContainer extends React.Component<AuthPropsType, DataObjectType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            //Вторым параметром на сервер мы отправляем объект настроек запроса
            //withCredentials: true означает что мы цепляем куки которые есть в
            //в браузере после авторизации на серваке
            //так как CORS политика запрещает автоматическое йепляние кукисов 
            //при кросдоменном обращенни
            withCredentials: true,
        })
            .then(response => {
                if (response.data.resultCode === 0){
                    this.props.setUserAuthDataActionCreator(response.data.data);
                }
            })
    }

    render (){
        return <Header {...{isAuth: this.props.data.isAuth, login: this.props.data.login}}/>
    }
};

const mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        data: state.auth
    }
};

export const HeaderContainer = connect(mapStateToProps, {setUserAuthDataActionCreator})(HeaderResponceContainer);