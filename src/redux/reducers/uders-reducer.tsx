import { v1 } from "uuid";
import { DispatchUsersPropsType } from "../../App";

const FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW',
    CHANGE_FOLLOW_STATUS = 'CHANGE_FOLLOW_STATUS',
    SET_USERS = 'SET_USERS';

export type UserObjType = {
    id: string,
    avatar: string,
    userName: string,
    status: string,
    location: {
        country: string,
        city: string,
    },
    followed: boolean,
};

export type UsersPropsType = {
    users: Array<UserObjType>,
};

const initialState = {
    users: [],
};

export const usersReducer = (state: UsersPropsType = initialState, action: DispatchUsersPropsType) => {
    switch (action.type) {
        case CHANGE_FOLLOW_STATUS:
            return {
                ...state,
                users: state.users.map((user: UserObjType) => user.id === action.userId ? {...user, followed: !user.followed} : user),
            };
       
        case SET_USERS:
            if (!action.users) return state;

            return {
                ...state,
                users: [...state.users, ...action.users],
            };
    }
    return state;
};

export const changeFollowStatusActionCreator = (userId: string) => ({type: CHANGE_FOLLOW_STATUS, userId});
export const setUsersActionCreator = (users: Array<UserObjType>) => ({type: SET_USERS, users});