import React from 'react';
import classes from './newpost.module.css';

type PostPropsType = {
    addPost: (postText: string | undefined) => void,
};

function NewPost(props: PostPropsType) {
    const {addPost} = props;

    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const addNewPostHandler = () => {
        let textAreaValue = newPostElement.current?.value;

        addPost(textAreaValue);
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