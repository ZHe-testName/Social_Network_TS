import React from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import Textarea from '../../../../custom_form_controls/textarea/Textarea';
import { maxLengthCreator, required } from '../../../../utils/validators';
import classes from './newpost.module.css';

// type NewPostPropsType = {
//     // newPostText: string,
//     // addNewPostHandler: (text: string) => void,
//     // onChangeHandler: (text: string) => void,
//     // handleSubmit: () => void,
//  };

export type AddPostFormDataType = {
    addPostField: string,
};

const maxLength10 = maxLengthCreator(10);

const NewPost: React.FC<InjectedFormProps<AddPostFormDataType>> = (props) => {

    return (
        <form 
            className={classes.new_post}
            onSubmit={props.handleSubmit}>
            <Field  
                component={Textarea}
                name="addPostField"
                cols={90} 
                rows={5} 
                placeholder="Typing your post here..."
                validate={[required, maxLength10]}/>
            
            <button 
                type='submit'
                className="send">Add post</button>
        </form>
    );
};

const NewPostReduxForm = reduxForm<AddPostFormDataType>({form: 'newPost'})(NewPost);

export default NewPostReduxForm;