import NewPostContainer from './new-post/NewPostContainer';
import Post from './post';
import classes from './myposts.module.css';
import { DispatchActionPropsType } from '../../../App';
import { PostsType } from '../Profile';
  
  export type PostsPropsType = {
    posts: Array<PostsType>,
    newPostText: string,
    dispatch: (action: DispatchActionPropsType) => void;
}; 


function MyPosts(props: PostsPropsType) {
    const {posts, newPostText, dispatch} = props;

    const postsArr = posts.map(post => <li key={post.id}><Post {...post}/></li>);

    return (
    <div className={classes.myposts}>
        <span className={classes.header}>My Posts</span>
        <NewPostContainer 
                newPostText={newPostText}
                dispatch={dispatch}/>

        <div className={classes.posts_block}>

            {postsArr}

        </div>
      </div>
    );
};

export default MyPosts;