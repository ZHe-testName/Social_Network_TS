import React from "react";
import { connect } from "react-redux";
import { getProfileThunkCreator, getStatusThunkCreator, updateStatusThunkCreator, ProfileDataType, ProfileUserType } from "../../redux/reducers/profile-reducer";
import { AppStateType } from "../../redux/redux-store";
import Profile from "./Profile";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { withAuthReadirect } from "../../hoc/withAuthedirect";
import { compose } from "redux";

type PathParamsType = {
    userId: string,
};

type MapStateToProps = {
    user: ProfileUserType,
};

type MapDispatchToProps = {
    getProfileThunkCreator: (userId: string) => void,
    updateStatusThunkCreator: (status: string) => void,
    getStatusThunkCreator: (userId: string) => void,
};

type ProfilePropsType = RouteComponentProps<PathParamsType> & OwnProfilePropsType
type OwnProfilePropsType = MapStateToProps & MapDispatchToProps;

export class ProfileRequestContainer extends React.Component<ProfilePropsType, ProfileDataType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = '19175';
        };

        this.props.getProfileThunkCreator(userId);
        this.props.getStatusThunkCreator(userId);
    }

    render() {
        console.log('cont');
        return <Profile 
                    {...this.props} 
                    user={this.props.user} 
                    updateStatus={this.props.updateStatusThunkCreator}/>
    }
};

const mapStateToProps = (state: AppStateType): MapStateToProps => {
    console.log(state.profilePage.user);
    return {
        user: state.profilePage.user,
    };
};

//функция compose предоставленна библиотекой redux
//она нужна для того что бы оборачивание в контейнерные обертки не привратилось 
//container heel
//она помагает преврвтить вызовы оберток в последовательный вызов функций контейнеров

//в первый вызов она принимает обертки с самой глубокой на ружу

//а вторым вызовом передается целевая компонента

const ProfileContainer = compose<React.ComponentType>(
                                    connect(mapStateToProps, {  getProfileThunkCreator, 
                                                                getStatusThunkCreator,
                                                                updateStatusThunkCreator }),
                                    withRouter,
                                    withAuthReadirect,
                                )(ProfileRequestContainer);

// const WithRouterContainerComponent = withRouter(ProfileRequestContainer);

// const ProfileContainer = withAuthReadirect(connect(mapStateToProps, {getProfileThunkCreator})(WithRouterContainerComponent));

export default ProfileContainer;