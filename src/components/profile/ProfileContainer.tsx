import React from "react";
import { connect } from "react-redux";
import { getProfileThunkCreator, ProfileDataType, ProfileUserType } from "../../redux/reducers/profile-reducer";
import { AppStateType } from "../../redux/redux-store";
import Profile from "./Profile";
import { RouteComponentProps, withRouter } from "react-router-dom";

type PathParamsType = {
    userId: string,
};

type MapStateToProps = {
    user: ProfileUserType,
    isAuth: boolean,
};

type MapDispatchToProps = {
    getProfileThunkCreator: (userId: string) => void,
};

type ProfilePropsType = RouteComponentProps<PathParamsType> & OwnProfilePropsType
type OwnProfilePropsType = MapStateToProps & MapDispatchToProps;

class ProfileRequestContainer extends React.Component<ProfilePropsType, ProfileDataType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = '19175';
        };

        this.props.getProfileThunkCreator(userId);
    }
    render() {
        return <Profile {...this.props} user={this.props.user}/>
    }
};

const mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        user: state.profilePage.user,
        isAuth: state.auth.isAuth,
    };
};

const WithRouterContainerComponent = withRouter(ProfileRequestContainer);

const ProfileContainer = connect(mapStateToProps, {getProfileThunkCreator})(WithRouterContainerComponent);

export default ProfileContainer;