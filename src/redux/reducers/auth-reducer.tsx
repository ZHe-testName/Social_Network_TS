import { Dispatch } from "react";
import { authAPI, LoginRequestObj } from "../../api/dal";
import { DispatchUsersActionType } from "../../App";

const SET_USER_DATA = 'SET_USER_DATA'; 

export type AuthStateType = {
    id: string | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
};

export type DataObjectType = {
    data: AuthStateType,
};

export type ActionType = {
    type: string,
    payload?: AuthStateType,
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
                    ...action.payload,
                    isAuth: true,
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
                    dispatch(setUserAuthDataActionCreator(data.data));
                }
            })
    };
};

export const loginThunkCreator = (userData: LoginRequestObj) => {
    return (dispatch: Dispatch<DispatchUsersActionType>) => {
        authAPI.login({...userData})
            .then(data => {
                console.log(data);
                if (data.data.resultCode === 0){
                    console.log(data);
                    // dispatch(getUserAuthDataThunkCreator(data));
                }
            })
    };
};

export const logoutThunkCreator = () => {
    return (dispatch: Dispatch<DispatchUsersActionType>) => {
        authAPI.logout()
            .then(resultCode => {
                if (resultCode === 0){
                    console.log(resultCode);
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