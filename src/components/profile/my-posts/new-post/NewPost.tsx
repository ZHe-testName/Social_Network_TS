import React from 'react';
import classes from './newpost.module.css';

// import {addPostCreator, onChangePostCreator} from '../../../../redux/reducers/profile-reducer';
// import { DispatchActionPropsType } from '../../../../App';

type NewPostPropsType = {
    newPostText: string,
    addNewPostHandler: (text: string) => void;
    onChangeHandler: (text: string) => void;
};

function NewPost(props: NewPostPropsType) {
    const {newPostText, addNewPostHandler, onChangeHandler} = props;

    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const onAddNewPostHandler = () => {
        if (newPostElement.current?.value){
            const textAreaValue = newPostElement.current.value;

            addNewPostHandler(textAreaValue);
        };
    };

    const onChangeTextHandler = () => {
        if (newPostElement.current?.value){
            const textAreaValue = newPostElement.current.value;

            onChangeHandler(textAreaValue);
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
                    onChange={onChangeTextHandler}>
                
            </textarea>
            
            <button className="send"
                    onClick={onAddNewPostHandler}>Add post</button>
        </div>
    );
};

export default NewPost;