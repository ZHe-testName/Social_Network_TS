import Post from './post';
import classes from './myposts.module.css';
import { DispatchProfileUserActionType } from '../../../redux/reducers/profile-reducer';
import { PostsType } from '../Profile';
import { MyPostsPropsType } from './MyPostsContainer';
import { PostType } from '../../../redux/reducers/profile-reducer';
import NewPostReduxForm, { AddPostFormDataType } from './new-post/NewPost';
  
  export type PostsPropsType = {
    posts: Array<PostsType>,
    newPostText: string,
    dispatch: (action: DispatchProfileUserActionType) => void;
}; 


function MyPosts(props: MyPostsPropsType) {
    const {posts, addNewPostHandler} = props;

    const postsArr = posts.map((post: PostType )=> <li key={post.id}><Post {...post}/></li>);

    const addPostHandler = (formData: AddPostFormDataType) => {
        addNewPostHandler(formData.addPostField);
    };

    return (
    <div className={classes.myposts}>
        <span className={classes.header}>My Posts</span>
        
        <NewPostReduxForm
                        onSubmit={addPostHandler}/>

        <div className={classes.posts_block}>

            {postsArr}

        </div>
      </div>
    );
};

export default MyPosts;