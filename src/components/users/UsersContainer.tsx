import React from "react";
import axios from "axios";
import { connect } from "react-redux";
// import { Dispatch } from "redux";

import { changePage, 
        followSwitch, 
        setTotalUsersCount, 
        toggleLoader,
        StateUserType, 
        UserType, 
        setUsers} from "../../redux/reducers/uders-reducer";
import { AppStateType } from "../../redux/redux-store";
import Users from "./Users";
import Preloader from "../preloader/Preloader";

type MapStateToProps = {
    users: Array<UserType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean | undefined,
};

type MapDispatchPropsType = {
    followSwitch: (userId: number) => void,
    setUsers: (users: any) => void,
    changePage: (currentPage: number) => void,
    setTotalUsersCount: (totalUsersCount: number) => void;  
    toggleLoader: (isFetching: boolean) => void;
};

export type UsersPropsType = MapStateToProps & MapDispatchPropsType;

class UsersRequestContainer extends React.Component<UsersPropsType, StateUserType>{
    componentDidMount() {
        if (this.props.users.length === 0){
            this.props.toggleLoader(true);
            
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(responce => {
                    this.props.toggleLoader(false);
                    this.props.setUsers(responce.data.items);
                    this.props.setTotalUsersCount(responce.data.totalCount);
                })
        };
    }

    changePageHandler = (pageNumber: number) => {
        this.props.toggleLoader(true);

        this.props.changePage(pageNumber);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(responce => {
                this.props.toggleLoader(false);
                this.props.setUsers(responce.data.items);
            });
    };

    render () {
        return <>
                {this.props.isFetching ? <Preloader /> : null}

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

//можно для диспача екшнкриэйторов использовать функцию mapDispatchToProps
//которая возвращает объект диспачей 

// const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
//     return {
//         followSwitch: (userId: number) => {
//             dispatch(changeFollowStatusActionCreator(userId));
//         },

//         setUsers: (users: StateUserType) => {
//             dispatch(setUsersActionCreator(users));
//         },

//         changePage: (currentPage: number) => {
//             dispatch(changeCurrentPageActionCreator(currentPage));
//         },

//         setTotalUsersCount: (totalUsersCount: number) => {
//             dispatch(setTotalUsersCountActionCreator(totalUsersCount));
//         },  

//         toggleLoader: (isFetching) => {
//             dispatch(toggleIsFetchingActionCreator(isFetching));
//         },
//     };
// };

//а можно "попросить" conect самому задиспатчить экшнкрэйторы и передать в них значения
//если передавать туда объект с криэйторами в качестве значений
//это гораздо уменшает наш код

//еще меньше кода можно писать если использовать одиноковые имена свойств и значений

const UsersContainer = connect(mapStateToProps, {
                                                    followSwitch,
                                                    setUsers,
                                                    changePage,
                                                    setTotalUsersCount,
                                                    toggleLoader,
                                                })(UsersRequestContainer);

export default UsersContainer;