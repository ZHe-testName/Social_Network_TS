import React from 'react';
import { compose } from 'redux';
import { Field, reduxForm } from 'redux-form';
import classes from './newpost.module.css';

type NewPostPropsType = {
    newPostText: string,
    addNewPostHandler: (text: string) => void,
    onChangeHandler: (text: string) => void,
    handleSubmit: () => void,
 };

function NewPost(props: any) {
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
        <form 
            className={classes.new_post}
            onSubmit={props.handleSubmit}>
            <Field  
                    component="textarea"
                    name="textarea"
                    value={newPostText}
                    // ref={newPostElement}
                    cols={90} 
                    rows={5} 
                    placeholder="Typing your post here..."
                    onChange={onChangeTextHandler} />
            
            <button className="send"
                    // onClick={onAddNewPostHandler}
                    >Add post</button>
        </form>
    );
};

// const NewPostReduxForm = compose<React.ComponentType>(reduxForm({form: 'newPost'}))(NewPost);

export default NewPost;