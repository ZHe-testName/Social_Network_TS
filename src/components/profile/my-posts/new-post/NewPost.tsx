import React from 'react';
import { compose } from 'redux';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import classes from './newpost.module.css';

type NewPostPropsType = {
    // newPostText: string,
    // addNewPostHandler: (text: string) => void,
    // onChangeHandler: (text: string) => void,
    // handleSubmit: () => void,
 };

export type AddPostFormDataType = {
    addPostField: string,
};

const NewPost: React.FC<InjectedFormProps<AddPostFormDataType>> = (props) => {
    return (
        <form 
            className={classes.new_post}
            onSubmit={props.handleSubmit}>
            <Field  
                    component="textarea"
                    name="addPostField"
                    cols={90} 
                    rows={5} 
                    placeholder="Typing your post here..."/>
            
            <button 
                className="send">Add post</button>
        </form>
    );
};

const NewPostReduxForm = reduxForm<AddPostFormDataType>({form: 'newPost'})(NewPost);

export default NewPostReduxForm;