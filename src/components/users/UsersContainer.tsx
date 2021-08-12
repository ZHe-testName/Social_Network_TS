import { connect } from "react-redux";
import { Dispatch } from "redux";
import { changeFollowStatusActionCreator, setUsersActionCreator, StateUserType, UserType } from "../../redux/reducers/uders-reducer";
import { AppStateType } from "../../redux/redux-store";
import Users from "./Users";

type MapStateToProps = {
    users: Array<UserType>,
};

type MapDispatchPropsType = {
    followSwitch: (userId: number) => void,
    setUsers: (users: any) => void,
};

export type UsersPropsType = MapStateToProps & MapDispatchPropsType;

const mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        users: state.usersPage.users,
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
    };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;