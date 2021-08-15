import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { changeCurrentPageActionCreator, 
        changeFollowStatusActionCreator, 
        setTotalUsersCountActionCreator, 
        setUsersActionCreator, 
        StateUserType, 
        UserType } from "../../redux/reducers/uders-reducer";
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

class UsersRequestContainer extends React.Component<UsersPropsType, StateUserType>{
    componentDidMount() {
        if (this.props.users.length === 0){
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(responce => {
                    this.props.setUsers(responce.data.items);
                    this.props.setTotalUsersCount(responce.data.totalCount);
                })
        };
    }

    changePageHandler = (pageNumber: number) => {
        this.props.changePage(pageNumber);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(responce => {
                this.props.setUsers(responce.data.items);
            });
    };

    render () {
        return <Users   
                    users={this.props.users}
                    pageSize={this.props.pageSize}
                    totalUsersCount={this.props.totalUsersCount}
                    currentPage={this.props.currentPage}
                    changePageHandler={this.changePageHandler}
                    followSwitch={this.props.followSwitch}/>
    }
};

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

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersRequestContainer);

export default UsersContainer;