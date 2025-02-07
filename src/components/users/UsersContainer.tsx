import React from "react";
import { connect } from "react-redux";

import { changePage, 
        setTotalUsersCount, 
        toggleLoader,
        StateUserType, 
        UserType, 
        getUsersThunkCreator,
        changePageThunkCreator,
        followSwitchingThunkCreator} from "../../redux/reducers/users-reducer";
import { AppStateType } from "../../redux/redux-store";
import Users from "./Users";
import Preloader from "../preloader/Preloader";
import { usersSelectors } from "../../redux/selectors/usersSelectors";

type MapStateToProps = {
    users: Array<UserType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingIdArr: Array<number | undefined>,
    auth: boolean,
};

type MapDispatchPropsType = {
    changePage: (currentPage: number) => void,
    setTotalUsersCount: (totalUsersCount: number) => void;  
    toggleLoader: (isFetching: boolean) => void;
    getUsersThunkCreator: (currentPage: number, pageSize: number) =>  void;
    changePageThunkCreator: (pageNumber: number, pageSize: number) => void;
    followSwitchingThunkCreator: (followed: boolean, userId: number) => void;
};

export type UsersPropsType = MapStateToProps & MapDispatchPropsType;

class UsersRequestContainer extends React.Component<UsersPropsType, StateUserType>{
    componentDidMount() {
        if (this.props.users.length === 0){
          this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
        };
    }

    changePageHandler = (pageNumber: number) => {
        this.props.changePageThunkCreator(pageNumber, this.props.pageSize);
    };

    render () {
        return <>
                {this.props.isFetching ? <Preloader /> : null}

                <Users   
                    users={this.props.users}
                    auth={this.props.auth}
                    pageSize={this.props.pageSize}
                    totalUsersCount={this.props.totalUsersCount}
                    currentPage={this.props.currentPage}
                    followingIdArr={this.props.followingIdArr}
                    changePageHandler={this.changePageHandler}
                    followSwitchingThunkCreator={this.props.followSwitchingThunkCreator}/>
            </>
    }
};

const mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        users: usersSelectors.getUsersSelector(state),
        pageSize: usersSelectors.getPageSizeSelector(state),
        totalUsersCount: usersSelectors.getTotalCountUsersSelector(state),
        currentPage: usersSelectors.getGetCurrentPageSelector(state),
        isFetching: usersSelectors.getIsFetchingSelector(state),
        followingIdArr: usersSelectors.getFollowingIdSelector(state),
        auth: usersSelectors.getIsAuthSelector(state),
    };
};

//можно для диспача екшнкриэйторов использовать функцию mapDispatchToProps
//которая возвращает объект диспачей 

//а можно "попросить" conect самому задиспатчить экшнкрэйторы и передать в них значения
//если передавать туда объект с криэйторами в качестве значений
//это гораздо уменшает наш код

//еще меньше кода можно писать если использовать одиноковые имена свойств и значений

const UsersContainer = connect(mapStateToProps, {
                                                    changePage,
                                                    setTotalUsersCount,
                                                    toggleLoader,
                                                    getUsersThunkCreator,
                                                    changePageThunkCreator,
                                                    followSwitchingThunkCreator
                                                })(UsersRequestContainer);

export default UsersContainer;


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