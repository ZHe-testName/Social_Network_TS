import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { changeCurrentPageActionCreator, 
        changeFollowStatusActionCreator, 
        setTotalUsersCountActionCreator, 
        toggleIsFetchingActionCreator,
        setUsersActionCreator, 
        StateUserType, 
        UserType } from "../../redux/reducers/uders-reducer";
import { AppStateType } from "../../redux/redux-store";
import Users from "./Users";

import classes from "./usersContainer.module.css";
import preloader from "../../imgs/Triangles-1.4s-200px.svg"

type MapStateToProps = {
    users: Array<UserType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
};

type MapDispatchPropsType = {
    followSwitch: (userId: number) => void,
    setUsers: (users: any) => void,
    changePage: (currentPage: number) => void,
    setTotalUsersCount: (totalUsersCount: number) => void;  
    toggleLoader: () => void;
};

export type UsersPropsType = MapStateToProps & MapDispatchPropsType;

class UsersRequestContainer extends React.Component<UsersPropsType, StateUserType>{
    componentDidMount() {
        this.props.toggleLoader();

        if (this.props.users.length === 0){
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(responce => {
                    this.props.setUsers(responce.data.items);
                    this.props.setTotalUsersCount(responce.data.totalCount);
                    this.props.toggleLoader();
                })
        };
    }

    changePageHandler = (pageNumber: number) => {
        this.props.toggleLoader();

        this.props.changePage(pageNumber);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(responce => {
                this.props.toggleLoader();
                this.props.setUsers(responce.data.items);
            });
    };

    render () {
        return <>
                {this.props.isFetching ? <img 
                                            className={classes.preloader}
                                            src={preloader}/> : null}

                <Users   
                    users={this.props.users}
                    pageSize={this.props.pageSize}
                    totalUsersCount={this.props.totalUsersCount}
                    currentPage={this.props.currentPage}
                    changePageHandler={this.changePageHandler}
                    followSwitch={this.props.followSwitch}/>
            </>
    }
};

const mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
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

        toggleLoader: () => dispatch(toggleIsFetchingActionCreator()),
    };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersRequestContainer);

export default UsersContainer;