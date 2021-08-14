import { connect } from "react-redux";
import { Dispatch } from "redux";
import { changeCurrentPageActionCreator, changeFollowStatusActionCreator, setTotalUsersCountActionCreator, setUsersActionCreator, StateUserType, UserType } from "../../redux/reducers/uders-reducer";
import { AppStateType } from "../../redux/redux-store";
import Users from "./Users";

type MapStateToProps = {
    users: Array<UserType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
};

type MapDispatchPropsType = {
    followSwitch: (userId: number) => void,
    setUsers: (users: any) => void,
    changePage: (currentPage: number) => void,
    setTotalUsersCount: (totalUsersCount: number) => void;  
};

export type UsersPropsType = MapStateToProps & MapDispatchPropsType;

const mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    };
};

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        followSwitch: (userId: number) => {
            dispatch(changeFollowStatusActionCreator(userId))
        },

        setUsers: (users: StateUserType) => {
            dispatch(setUsersActionCreator(users));
        },

        changePage: (currentPage: number) => {
            dispatch(changeCurrentPageActionCreator(currentPage))
        },

        setTotalUsersCount: (totalUsersCount: number) => {
            dispatch(setTotalUsersCountActionCreator(totalUsersCount))
        },  
    };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;