import NewPost from './new-post';
import Post from './post';
import classes from './myposts.module.css';

type PostsType = {
    text: string,
    likes: number,
    dislikes: number,
    id: string,
  };

type DispatchPropsType = {
    type: string,
    message?: string,
    id?: string,
    observerFunc?: () => void,
};

type PropsType = {
    posts: Array<PostsType>,
    newPostText: string,
    dispatch: (action: DispatchPropsType) => void;
};


function MyPosts(props: PropsType) {
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