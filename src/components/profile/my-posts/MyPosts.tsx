import NewPost from './new-post';
import Post from './post';
import classes from './myposts.module.css';

import {PostsPropsType} from '../../../redux/types';


function MyPosts(props: PostsPropsType) {
    const {posts, newPostText, dispatch} = props;

    const postsArr = posts.map(post => <li key={post.id}><Post {...post}/></li>);

    return (
    <div className={classes.myposts}>
        <span className={classes.header}>My Posts</span>
        <NewPost 
                newPostText={newPostText}
                dispatch={dispatch}/>

        <div className={classes.posts_block}>

            {postsArr}

        </div>
      </div>
    );
};

export default MyPosts;