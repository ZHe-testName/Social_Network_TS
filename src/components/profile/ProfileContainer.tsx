import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { ProfileDataType, ProfileUserType } from "../../redux/reducers/profile-reducer";
import { AppStateType } from "../../redux/redux-store";
import { setUserProfile } from '../../redux/reducers/profile-reducer'
import Profile from "./Profile";
import { RouteComponentProps, withRouter } from "react-router-dom";

type PathParamsType = {
    userId: string,
};

type MapStateToProps = {
    user: ProfileUserType,
};

type MapDispatchToProps = {
    setUserProfile: (userProfile: ProfileUserType) => void,
};

type ProfilePropsType = RouteComponentProps<PathParamsType> & OwnProfilePropsType
type OwnProfilePropsType = MapStateToProps & MapDispatchToProps;

class ProfileRequestContainer extends React.Component<ProfilePropsType, ProfileDataType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.match.params.userId}`)
                    .then(responce => {
                        this.props.setUserProfile(responce.data);
                    });
    }
    render() {
        return <Profile {...this.props} user={this.props.user}/>
    }
};

const mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        user: state.profilePage.user,
    };
};

const WithRouterContainerComponent = withRouter(ProfileRequestContainer);

const ProfileContainer = connect(mapStateToProps, {setUserProfile})(WithRouterContainerComponent);

export default ProfileContainer;