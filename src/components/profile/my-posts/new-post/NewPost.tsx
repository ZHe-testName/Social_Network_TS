import React from 'react';
import classes from './newpost.module.css';

function NewPost() {
    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const addNewPostHandler = () => {
        alert(newPostElement.current?.value);
    };

    return (
        <div className={classes.new_post}>
            <textarea  
                    ref={newPostElement}
                    cols={90} 
                    rows={5} 
                    placeholder="Typing your post here...">
                
            </textarea>
            
            <button className="send"
                    onClick={addNewPostHandler}>Add post</button>
        </div>
    );
};

export default NewPost;