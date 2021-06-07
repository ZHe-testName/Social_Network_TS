import React from 'react';
import classes from './newpost.module.css';

import {addPostActionCreator, onChangePostActionCreator} from '../../../../redux/bll';

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

            dispatch(addPostActionCreator(textAreaValue));
        };
    };

    const onChangeHandler = () => {
        if (newPostElement.current?.value){
            const textAreaValue = newPostElement.current.value;

            dispatch(onChangePostActionCreator(textAreaValue));
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