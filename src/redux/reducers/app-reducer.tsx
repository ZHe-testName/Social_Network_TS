import { Dispatch } from "react";
import { DispatchUsersActionType, MapDispatchPropsType } from "../../App";
import { getUserAuthDataThunkCreator } from "./auth-reducer";

enum ActionsType {
    SET_INITIALIZED = 'SET_INITIALIZED',
};

export type AppReducerStateType = {
    initialized: boolean,
};

const initialState: AppReducerStateType = {
    initialized: false,
};

export function appReducer (state: AppReducerStateType = initialState, action: AppActionCreatorsType): AppReducerStateType{
    switch(action.type){
        case ActionsType.SET_INITIALIZED: {
            return {
                ...state,
                initialized: action.payload,
            }
        }
        default:
            return state;
    }
};

export const initializeAppAC = (iniinitialize: boolean) => {
    return {type: ActionsType.SET_INITIALIZED, payload: iniinitialize}
};

export const initializeAppTC = () => (dispatch: Dispatch<InitType | AppActionCreatorsType>) => {
    //нужно избегать дальнейшец работы с dispatch
    //но иногда это нужно
    //dispatch возвращает то что возвращает функция переданая в него
    //этим можно воспользываться
    const promise: any = dispatch(getUserAuthDataThunkCreator());

    Promise.all([promise])
            .then(() => dispatch(initializeAppAC(true)));
};

type InitType = ReturnType<typeof getUserAuthDataThunkCreator>

type AppActionCreatorsType = ReturnType<typeof initializeAppAC>;