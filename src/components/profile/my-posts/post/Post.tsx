import classes from './post.module.css';

type PostType = {
    text: string,
    likes: number,
    dislikes: number,
    id: string,
};

// type PropsType = {
//     description: PostType,
// };

function Post(props: PostType) {
    const {text, likes, dislikes, id} = props;

    return (
        <div className={classes.post} key={id}>
                <img src="../../../../imgs/1-17.jpg" 
                          alt="user avatar image"/>

                <div className={classes.text_area}>
                    <span className={classes.post_text}>{text}</span>

                    {/* <button className={classes.like}></button>

                    <button className={classes.dislike}></button> */}
                
                    <span className={classes.counter}>{likes}</span>
                    <input  className={classes.text_area_input} 
                            type="radio" 
                            id="like" 
                            name="post-reactions" 
                            value="like"/>
                    <label className={classes.like} htmlFor="like"></label>
                    
                    <span className={classes.counter}>{dislikes}</span>
                    <input  className={classes.text_area_input} 
                            type="radio"    
                            id="dislike" 
                            name="post-reactions" 
                            value="dislike"/>
                    <label className={classes.dislike} htmlFor="dislike"></label>
                </div>
        </div>
    );
};

export default Post;