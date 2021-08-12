    import { DispatchUsersActionType } from "../../App";

const CHANGE_FOLLOW_STATUS = 'CHANGE_FOLLOW_STATUS',
    SET_USERS = 'SET_USERS';

// export type UserObjType = {
//     id: string,
//     avatar: string,
//     userName: string,
//     status: string,
//     location: {
//         country: string,
//         city: string,
//     },
//     followed: boolean,
// };

// export type UsersPropsType = {
//     users: Array<UserObjType>,
// };

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
};

const initialState: StateUserType = {
    users: [],
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
                users: [...state.users, ...action.users],
            };
    }
    return state;
};

export const changeFollowStatusActionCreator = (userId: number) => ({type: CHANGE_FOLLOW_STATUS, userId});
export const setUsersActionCreator = (users: StateUserType) => ({type: SET_USERS, users});