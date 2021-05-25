import NewPost from './new-post';
import Post from './post';
import classes from './myposts.module.css';

type PostsType = {
    text: string,
    likes: number,
    dislikes: number,
    id: string,
  };

type PropsType = {
    posts: Array<PostsType>,
};


function MyPosts(props: PropsType) {
    const {posts} = props;

    const postsArr = posts.map(post => <li key={post.id}><Post {...post}/></li>);

    return (
    <div className={classes.myposts}>
        <span className={classes.header}>My Posts</span>
        <NewPost />

        <div className={classes.posts_block}>

            {postsArr}

        </div>
      </div>
    );
};

export default MyPosts;