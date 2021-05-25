import classes from './post.module.css';
import Avatar from '../../../avatar';

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
    const {text, likes, dislikes} = props;

    return (
        <div className={classes.post}>
                <Avatar settings={{className: classes.post_img, imgUrl: 'https://slovnet.ru/wp-content/uploads/2019/01/1-17.jpg'}}/>

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