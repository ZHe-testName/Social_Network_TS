import React from 'react';
import classes from './newpost.module.css';

type PostPropsType = {
    newPostText: string,
    addPost: (postText: string | undefined) => void,
    textAreaOnChange: (text: string | undefined) => void,
};

function NewPost(props: PostPropsType) {
    const {newPostText, addPost, textAreaOnChange} = props;

    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const addNewPostHandler = () => {
        const textAreaValue = newPostElement.current?.value;

        addPost(textAreaValue);
    };

    const onChangeHandler = () => {
        const textAreaValue = newPostElement.current?.value;

        console.log(textAreaValue);
        textAreaOnChange(textAreaValue);
    };

    return (
        <div className={classes.new_post}>
            <textarea  
                    value={newPostText}
                    ref={newPostElement}
                    cols={90} 
                    rows={5} 
                    placeholder="Typing your post here..."
                    onChange={onChangeHandler}>
                
            </textarea>
            
            <button className="send"
                    onClick={addNewPostHandler}>Add post</button>
        </div>
    );
};

export default NewPost;