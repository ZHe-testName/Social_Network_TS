import Post from './post';
import classes from './myposts.module.css';
import { DispatchProfileUserActionType } from '../../../App';
import { PostsType } from '../Profile';
import NewPost from './new-post';
import { MyPostsPropsType } from './MyPostsContainer';
import { PostType } from '../../../redux/reducers/profile-reducer';
  
  export type PostsPropsType = {
    posts: Array<PostsType>,
    newPostText: string,
    dispatch: (action: DispatchProfileUserActionType) => void;
}; 


function MyPosts(props: MyPostsPropsType) {
    const {posts, newPostText, addNewPostHandler, onChangeHandler} = props;

    const postsArr = posts.map((post: PostType )=> <li key={post.id}><Post {...post}/></li>);

    return (
    <div className={classes.myposts}>
        <span className={classes.header}>My Posts</span>
        <NewPost
                newPostText={newPostText}
                addNewPostHandler={addNewPostHandler}
                onChangeHandler={onChangeHandler}/>

        <div className={classes.posts_block}>

            {postsArr}

        </div>
      </div>
    );
};

export default MyPosts;