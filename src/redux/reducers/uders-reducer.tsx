import { Dispatch } from "react";
import { GetUsersRequestType, usersAPI } from "../../api/dal";
import { DispatchUsersActionType } from "../../App";

const CHANGE_FOLLOW_STATUS = 'CHANGE_FOLLOW_STATUS',
    SET_USERS = 'SET_USERS',
    CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE',
    SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT',
    TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING',
    TOOGLE_FOLLOWING_PROGRES = 'TOOGLE_FOLLOWING_PROGRES';

export type UserType = {
    followed: boolean,
    id: number,
    name: string,
    photos: {small: string | null, large:string | null},
    status: string | null,
    uniqueUrlName: string | null,
};

export type StateUserType = {
    users: Array<UserType> | [],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    //этот массив нужен чтобы можно было знать кнопку какого
    //юзера нужно дизейблить в момент запроса на сервак
    followingIdArr: Array<number | undefined>,
};

const initialState: StateUserType = {
    users: [],
    pageSize: 4,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingIdArr: [],
};

export const usersReducer = (state: StateUserType = initialState, action: DispatchUsersActionType): StateUserType => {
    switch (action.type) {
        case CHANGE_FOLLOW_STATUS:
            return {
                ...state,
                users: state.users.map((user: UserType) => user.id === action.userId ? {...user, followed: !user.followed} : user),
            };
       
        case SET_USERS:
            if (!action.users) return state;

            return {
                ...state,
                users: [...action.users],
            };

        case CHANGE_CURRENT_PAGE:
            if (!action.currenPage) return state;

            return {
                ...state,
                currentPage: action.currenPage,
            }; 

        case SET_TOTAL_USERS_COUNT:
            if (!action.totalUsersCount) return state;

            return {
                ...state,
                totalUsersCount: action.totalUsersCount,
            };
            
        case TOGGLE_IS_FETCHING:
            if (!action.isFetching) {
                return {
                    ...state,
                    isFetching: false,
                }; 
            };

            return {
                ...state,
                isFetching: action.isFetching,
            }; 

        case TOOGLE_FOLLOWING_PROGRES:
            return {
                ...state,
                followingIdArr: action.isFetching 
                    ? [...state.followingIdArr, action.userId] 
                    : state.followingIdArr.filter(id => id !== action.userId),
            };
    }
    return state;
};

export const followSwitch = (userId: number) => ({type: CHANGE_FOLLOW_STATUS, userId});
export const setUsers = (users: Array<UserType>) => ({type: SET_USERS, users});
export const changePage = (currenPage: number) => ({type: CHANGE_CURRENT_PAGE, currenPage});
export const setTotalUsersCount = (totalUsersCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export const toggleLoader = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const isFollowingTriger = (isFetching: boolean, userId: number) => ({type: TOOGLE_FOLLOWING_PROGRES, isFetching, userId});

//THUNK

//Thunk-и это функции которые принимают от когото нужные данные
//и возвращают функцию которая диспачит экшн-криэйторы

//Санки нужны для того чтобы убрвть асинхронные вызовы из презентационной компоненты
//так как она просто UI прослйка и не должна ничего делать кроме как 
//получать и отображать данные

//Так как это асинхронные прцесы мы не можем вклинить их в поток
//то есть делать асинхронные вызовы в reducer-ах

//по этому мы используем Санки для асинхронных оьращений и диспачей

//Thunk-creator-и нужны для передачи через них данных 
//при помощи замыканий
export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch<DispatchUsersActionType>) => {
        dispatch(toggleLoader(true));
            
        usersAPI.getUsers(currentPage, pageSize)
            .then((data: GetUsersRequestType) => {
                dispatch(toggleLoader(false));
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount));
            })}
};

export const changePageThunkCreator = (pageNumber: number, pageSize: number) => {
    return (dispatch: Dispatch<DispatchUsersActionType>) => {
        dispatch(toggleLoader(true));

        dispatch(changePage(pageNumber));

        usersAPI.getUsers(pageNumber, pageSize)
            .then((data: GetUsersRequestType) => {
                dispatch(toggleLoader(false));
                dispatch(setUsers(data.items));
            });
    }
};