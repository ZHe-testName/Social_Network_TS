import Post from './post';
import classes from './myposts.module.css';
import { DispatchActionPropsType } from '../../../App';
import { PostsType } from '../Profile';
import NewPost from './new-post';
  
  export type PostsPropsType = {
    posts: Array<PostsType>,
    newPostText: string,
    dispatch: (action: DispatchActionPropsType) => void;
}; 


function MyPosts(props: any) {
    const {posts, newPostText, addNewPostHandler, onChangeHandler} = props;

    if (!posts) return props;

    const postsArr = posts.map((post: any )=> <li key={post.id}><Post {...post}/></li>);

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