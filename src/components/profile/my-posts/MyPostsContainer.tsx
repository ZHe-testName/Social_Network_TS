import { connect } from "react-redux";
import { Dispatch } from "redux";
import { addPostCreator, PostType } from "../../../redux/reducers/profile-reducer";
import { AppStateType } from "../../../redux/redux-store";
import MyPosts from "./MyPosts";

type MapStateToPorops = {
    posts: Array<PostType> | [],
};

type MapDispatchToProps = {
    addNewPostHandler: (text: string) => void,
};

export type MyPostsPropsType = MapStateToPorops & MapDispatchToProps;

const mapStateToProps = (state: AppStateType): MapStateToPorops => {
    return {
        posts: state.profilePage.posts,
    };
};

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        addNewPostHandler: (text: string) => {
            dispatch(addPostCreator(text))
        },
    };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);



export default MyPostsContainer;