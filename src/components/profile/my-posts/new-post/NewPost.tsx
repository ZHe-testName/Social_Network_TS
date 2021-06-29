import React from 'react';
import classes from './newpost.module.css';

import {addPostCreator, onChangePostCreator} from '../../../../redux/reducers/profile-reducer';
import { DispatchActionPropsType } from '../../../../App';

export type NewPostPropsType = {
    newPostText: string,
    dispatch: (action: DispatchActionPropsType) => void;
};

function NewPost(props: NewPostPropsType) {
    const {newPostText, dispatch} = props;

    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const addNewPostHandler = () => {
        if (newPostElement.current?.value){
            const textAreaValue = newPostElement.current.value;

            dispatch(addPostCreator(textAreaValue));
        };
    };

    const onChangeHandler = () => {
        if (newPostElement.current?.value){
            const textAreaValue = newPostElement.current.value;

            dispatch(onChangePostCreator(textAreaValue));
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