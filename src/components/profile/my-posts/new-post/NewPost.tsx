import classes from './newpost.module.css';

function NewPost() {
    return (
        <div className={classes.new_post}>
            <textarea  cols={90} rows={5} placeholder="Typing your post here...">
                
            </textarea>
            
            <button className="send">Send</button>
        </div>
    );
};

export default NewPost;