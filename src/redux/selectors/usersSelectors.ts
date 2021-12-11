import { createSelector } from "reselect";
import { StateUserType, UserType } from "../reducers/users-reducer";
import { AppStateType } from "../redux-store";


//Селекторы нужны для выборки из mapStaсteToPropsтейта
//Если в mapDispatchToProps или в mapStateToProps передавать просто выборку 
//с объекта то при изменении вида хранения данных
//прйдется переписывать все компоненты которые  них нуждаются

//для выборки данных архтектурно правильно по этому будет использовать функции
//чтобы в случае чего менять представление только тут 
//в=а компонента будет просто вызывать эту функцию

//важно следить чтобы функция не возвращала новые данные когда это не нужно
//так как мапДиспатч срабатывает при каждом обновлении стейта
//касается оно его или нет
//и соответственно функция будет срабатывать тоже

//и вызывать перерендер возвраом новых данных

//плюс важно хешировать результа для одинаковаых входных данных
//чтоды в случае сильных расчетов в нутри функции не грузить посто так проц

//для эого нам нужны зависимости

//чтобы все это не писать в ручную используем библиотеку RESELECT

//простые селекторы можно отавить так а вот сложные лутще через reselect

//допустим у нас есть над юзерами проводится "сложная фильтрация"
//фильтер всегда возвращает новый массив и соответсвенно
//про запуске мапСтейт будет постоянная перерисовка при изменении любых данных даже не касающихся юзеров
//инкапсулируем логику с помощю reselect

//создат селектор можно с помощю функции createSelector

//первым параметром она принимаеет более примитивные селекторы 
//котроые вернут зависимости прои изменении которых и будет запускатся 
//более сложный селектор

const getUsersSimpleSelector = (state: AppStateType) => {
    return state.usersPage.users;
};

export const usersSelectors = {
    getUsersSelector: createSelector(getUsersSimpleSelector, 
        (users: UserType[]) => {
            return users.filter(u => true);
    }),

    getPageSizeSelector (state: AppStateType){
        return state.usersPage.pageSize;
    },

    getTotalCountUsersSelector (state: AppStateType){
        return state.usersPage.totalUsersCount;
    },

    getGetCurrentPageSelector (state: AppStateType){
        return state.usersPage.currentPage;
    },

    getIsFetchingSelector (state: AppStateType){
        return state.usersPage.isFetching;
    },

    getFollowingIdSelector (state: AppStateType){
        return state.usersPage.followingIdArr;
    },

    getIsAuthSelector (state: AppStateType){
        return state.auth.isAuth;
    },
};