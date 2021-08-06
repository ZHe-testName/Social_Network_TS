import { connect } from "react-redux";
import { addPostCreator, onChangePostCreator } from "../../../redux/reducers/profile-reducer";
import MyPosts from "./MyPosts";

const mapStateToProps = (state: any) => {
    return {
        mainUser: state.profilePage.mainUser,
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        addNewPostHandler: (text: string) => {
            dispatch(addPostCreator(text))
        },

        onChangeHandler: (text: string) => {
            dispatch(onChangePostCreator(text))
        },
    };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);



export default MyPostsContainer;