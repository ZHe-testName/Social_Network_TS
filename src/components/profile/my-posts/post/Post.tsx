import classes from './post.module.css';

function Post() {
    return (
        <div className={classes.post}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXodZSEAhaKuQ-KSl9izJj6s9gRMIGjLYwuEkfColSBx9CxqyBOmSy660Qk8FQAd3v2_w&usqp=CAU" 
                          alt="user avatar image"/>

                <div className={classes.text_area}>
                    <span className={classes.post_text}>My post text field My post text field vhhfhfhfhfh</span>

                    {/* <button className={classes.like}></button>

                    <button className={classes.dislike}></button> */}
                    <input type="radio" id="like" name="post-reactions" value="like"/>
                    <label className={classes.like} htmlFor="like"></label>

                    <input type="radio" id="dislike" name="post-reactions" value="dislike"/>
                    <label className={classes.dislike} htmlFor="dislike"></label>
                </div>
        </div>
    );
};

export default Post;