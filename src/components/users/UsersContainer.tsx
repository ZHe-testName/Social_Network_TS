import { connect } from "react-redux";
import { Dispatch } from "redux";
import { changeFollowStatusActionCreator, setUsersActionCreator } from "../../redux/reducers/uders-reducer";
import { AppStateType } from "../../redux/redux-store";
import Users from "./Users";

type MapDispatchPropsType = {
    followSwitch: (userId: string) => void,
    setUsers: (users: any) => void,
};

const setStateToProps = (state: AppStateType) => {
    return {
        ...state,
        users: state.usersPage.users,
    };
};

const setDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        followSwitch: (userId: string) => {
            dispatch(changeFollowStatusActionCreator(userId))
        },

        setUsers: (users: any) => {
            dispatch(setUsersActionCreator(users));
        },
    };
};

const UsersContainer = connect(setStateToProps, setDispatchToProps)(Users);

export default UsersContainer;