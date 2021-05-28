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
    newPostText: string,
    addPost: (postText: string | undefined) => void,
    textAreaOnChange: (text: string | undefined) => void,
};


function MyPosts(props: PropsType) {
    const {posts, newPostText, addPost, textAreaOnChange} = props;

    const postsArr = posts.map(post => <li key={post.id}><Post {...post}/></li>);

    return (
    <div className={classes.myposts}>
        <span className={classes.header}>My Posts</span>
        <NewPost 
                newPostText={newPostText}
                addPost={addPost}
                textAreaOnChange={textAreaOnChange}/>

        <div className={classes.posts_block}>

            {postsArr}

        </div>
      </div>
    );
};

export default MyPosts;