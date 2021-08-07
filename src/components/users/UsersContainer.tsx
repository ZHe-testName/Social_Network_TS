import { connect } from "react-redux";
import { changeFollowStatusActionCreator, setUsersActionCreator } from "../../redux/reducers/uders-reducer";
import Users from "./Users";

const setStateToProps = (state: any) => {
    return {
        ...state,
        users: state.usersPage.users,
    };
};

const setDispatchToProps = (dispatch: any) => {
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