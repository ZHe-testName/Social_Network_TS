import React from 'react';
import classes from './newpost.module.css';

type DispatchPropsType = {
    type: string,
    message?: string,
    id?: string,
    observerFunc?: () => void,
};

type PostPropsType = {
    newPostText: string,
    dispatch: (action: DispatchPropsType) => void;
};


function NewPost(props: PostPropsType) {
    const {newPostText, dispatch} = props;

    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const addNewPostHandler = () => {
        if (newPostElement.current?.value){
            const textAreaValue = newPostElement.current.value;

            dispatch({type: 'ADD-POST', message: textAreaValue});
        };
    };

    const onChangeHandler = () => {
        if (newPostElement.current?.value){
            const textAreaValue = newPostElement.current.value;

            dispatch({type: 'UPDATE-NEW-POST-TEXT', message: textAreaValue});
        };
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