import { Dispatch } from "react";
import { stopSubmit } from "redux-form";
import { authAPI, LoginRequestObj } from "../../api/dal";
import { DispatchUsersActionType } from "../../App";

const SET_USER_DATA = 'SET_USER_DATA'; 

export type AuthStateType = {
    id: string | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
};

type TestDispatchType = {
    dispatch: (dispatch: Dispatch<DispatchUsersActionType>) => void
};

export type DataObjectType = {
    data: AuthStateType,
};

export type ActionType = {
    type: string,
    data?: AuthStateType,
};

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
};

export const authReducer = (state: AuthStateType = initialState, action: ActionType): AuthStateType => {
    switch (action.type){
        case SET_USER_DATA:
            return {
                    ...state,
                    ...action.data,
                };

        default:
            return state;
    };
};

export const setUserAuthDataActionCreator = (data: AuthStateType) => ({type: SET_USER_DATA, data});

export const getUserAuthDataThunkCreator = () => {
    return (dispatch: Dispatch<DispatchUsersActionType>) => {
        authAPI.getAuthData()
            .then(data => {
                if (data.resultCode === 0){
                    dispatch(setUserAuthDataActionCreator({...data.data, isAuth: true}));
                }
            })
    };
};

export const loginThunkCreator = (userData: LoginRequestObj) => {
    return (dispatch: Dispatch<any>) => {
        //свойство _error вызывает общую ошыбку фомы
        //это нужно для того чтобы вызвать аварийную ошыбку
        //при не правильном вводе пароля или мыла

        //стандартная валидация форм не срабатывает
        //из-за тго что ответ приходит асинхронно

        //по этому мы вызываем метод stopSubmit при отличном от 0
        //резаст коде
        //это метод библиотеки редакс чтобы остановить сабмит
        authAPI.login({...userData})
            .then(data => {
                if (data.data.resultCode === 0){
                    dispatch(getUserAuthDataThunkCreator());
                }else{
                    const message = data.data.messages.length > 0 && data.data.messages[0];

                    dispatch(stopSubmit('login', { _error: message}));
                }
            })
    };
};

export const logoutThunkCreator = () => {
    return (dispatch: Dispatch<DispatchUsersActionType>) => {
        authAPI.logout()
            .then(resultCode => {
                if (resultCode === 0){
                    dispatch(setUserAuthDataActionCreator({
                                                            email: null, 
                                                            id: null, 
                                                            login: null, 
                                                            isAuth: false,
                                                        }));
                }
            })
    };
};