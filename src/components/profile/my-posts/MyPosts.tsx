import NewPost from './new-post';
import Post from './post';
import classes from './myposts.module.css';


function MyPosts() {
    return (
    <div className={classes.myposts}>
        <span className={classes.header}>My Posts</span>
        <NewPost />

        <div className={classes.posts_block}>
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
      </div>
    );
};

export default MyPosts;