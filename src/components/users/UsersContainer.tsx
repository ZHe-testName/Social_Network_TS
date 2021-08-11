import { connect } from "react-redux";
import { Dispatch } from "redux";
import { changeFollowStatusActionCreator, setUsersActionCreator } from "../../redux/reducers/uders-reducer";
import { AppStateType } from "../../redux/redux-store";
import Users from "./Users";

type SetStateToProps = {

};

type MapDispatchPropsType = {
    followSwitch: (userId: string) => void,
    setUsers: (users: any) => void,
};

const mapStateToProps = (state: AppStateType) => {
    return {
        ...state,
        users: state.usersPage.users,
    };
};

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        followSwitch: (userId: string) => {
            dispatch(changeFollowStatusActionCreator(userId))
        },

        setUsers: (users: any) => {
            dispatch(setUsersActionCreator(users));
        },
    };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;