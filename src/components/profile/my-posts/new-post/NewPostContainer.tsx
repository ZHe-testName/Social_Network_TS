// import React from 'react';
// import classes from './newpost.module.css';
import NewPost from './NewPost';

import {addPostCreator, onChangePostCreator} from '../../../../redux/reducers/profile-reducer';
import { DispatchActionPropsType } from '../../../../App';

export type NewPostContainerPropsType = {
    newPostText: string,
    dispatch: (action: DispatchActionPropsType) => void;
};

function NewPostContainer(props: NewPostContainerPropsType) {
    const {newPostText, dispatch} = props;

    const addNewPostHandler = (text:string) => {
        if (text){
            dispatch(addPostCreator(text));
        };
    };

    const onChangeHandler = (text:string) => {
        if (text){
            dispatch(onChangePostCreator(text));
        };
    };

    return (
        <NewPost 
            newPostText={newPostText}
            addNewPostHandler={addNewPostHandler}
            onChangeHandler={onChangeHandler}/>
    );
};

export default NewPostContainer;