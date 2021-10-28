import React from 'react';
import { compose } from 'redux';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import classes from './newpost.module.css';

type NewPostPropsType = {
    newPostText: string,
    addNewPostHandler: (text: string) => void,
    // onChangeHandler: (text: string) => void,
    // handleSubmit: () => void,
 };

type AddPostFormDataType = {
    addPostField: string,
};

const NewPost: React.FC<InjectedFormProps<AddPostFormDataType>> = (props) => {
    // const {newPostText, addNewPostHandler} = props;

    // const newPostElement = React.createRef<HTMLTextAreaElement>();

    const onAddNewPostHandler = (formData: AddPostFormDataType) => {
        console.log(formData);
        // if (newPostElement.current?.value){
        //     const textAreaValue = newPostElement.current.value;

        //     addNewPostHandler(textAreaValue);
        // };

        // addNewPostHandler(textAreaValue);
    };

    // const onChangeTextHandler = () => {
    //     if (newPostElement.current?.value){
    //         const textAreaValue = newPostElement.current.value;

    //         onChangeHandler(textAreaValue);
    //     };
    // };

    return (
        <form 
            className={classes.new_post}
            onSubmit={props.handleSubmit}>
            <Field  
                    component="textarea"
                    name="addPostField"
                    // value={newPostText}
                    // ref={newPostElement}
                    cols={90} 
                    rows={5} 
                    placeholder="Typing your post here..."/>
            
            <button className="send"
                    // onClick={onAddNewPostHandler}
                    >Add post</button>
        </form>
    );
};

const NewPostReduxForm = reduxForm<AddPostFormDataType>({form: 'newPost'})(NewPost);

// export default NewPost;