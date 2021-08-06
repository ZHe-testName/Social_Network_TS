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
    users: [
        {
            id: v1(),
            avatar: 'https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png',
            userName: 'Jony',
            status: 'Hors-rider',
            location: {
                country: 'USA',
                city: 'Springfield',
            },
            followed: true,
        },
        {
            id: v1(),
            avatar: 'https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png',
            userName: 'Hitler',
            status: 'My War is My',
            location: {
                city: 'Berlin',
                country: 'Germany',
            },
            followed: true,
        },
        {
            id: v1(),
            avatar: 'https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png',
            userName: 'Vitalik',
            status: 'I sow your train',
            location: {
                country: 'Ukraine',
                city: 'Zhmerunka',
            },
            followed: false,
        },
        {
            id: v1(),
            avatar: 'https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png',
            userName: 'Koony Lee',
            status: 'My heart is buket of the ice',
            location: {
                country: 'Japan',
                city: 'Tokyo',
            },
            followed: true,
        },
    ],
};


export const usersReducer = (state: UsersPropsType = initialState, action: DispatchUsersPropsType) => {
    switch (action.type) {
        case CHANGE_FOLLOW_STATUS:
            return {
                ...state,
                users: state.users.map((user: UserObjType) => user.id === action.id ? {...user, followed: !user.followed} : user),
            };
        // case FOLLOW:
        //     return {
        //         ...state,
        //         users: state.users.map((user: UserObjType) => user.id === action.id ? {...user, followed: !user.followed} : user),
        //     };
        // case UNFOLLOW:
        //     return {
        //         ...state,
        //         users: state.users.map((user: UserObjType) => user.id === action.id ? {...user, followed: !user.followed} : user),
        //     };
        case SET_USERS:
            if (!action.users) return state;

            return {
                ...state,
                users: [...state.users, ...action.users],
            };
    }
    return state;
};

// export const followActionCreator = (userId: string) => ({type: FOLLOW, userId});
// export const unFollowActionCreator = (userId: string) => ({type: UNFOLLOW, userId});
export const changeFollowStatusActionCreator = (userId: string) => ({type: CHANGE_FOLLOW_STATUS, userId});
export const setUsersActionCreator = (users: Array<UserObjType>) => ({type: SET_USERS, users});