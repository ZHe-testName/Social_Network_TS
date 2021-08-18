import { DispatchUsersActionType } from "../../App";

const CHANGE_FOLLOW_STATUS = 'CHANGE_FOLLOW_STATUS',
    SET_USERS = 'SET_USERS',
    CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE',
    SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT',
    TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

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
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
};

const initialState: StateUserType = {
    users: [],
    pageSize: 4,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
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
            return {
                ...state,
                isFetching: !state.isFetching,
            }; 
    }
    return state;
};

export const changeFollowStatusActionCreator = (userId: number) => ({type: CHANGE_FOLLOW_STATUS, userId});
export const setUsersActionCreator = (users: StateUserType) => ({type: SET_USERS, users});
export const changeCurrentPageActionCreator = (currenPage: number) => ({type: CHANGE_CURRENT_PAGE, currenPage});
export const setTotalUsersCountActionCreator = (totalUsersCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export const toggleIsFetchingActionCreator = () => ({type: TOGGLE_IS_FETCHING});