import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import React, {FocusEvent, MouseEvent} from 'react';
import classes from './send_message_form.module.css';

export type MessageFormType = {
    sendMessageField: string,
};


const SendMessageForm: React.FC<InjectedFormProps<MessageFormType>> = (props) => {
    const onSendMessageHandler = (e: MouseEvent<HTMLButtonElement>) => {
            e.currentTarget.classList.add(classes.send_message_button_on_click);
    };

    const onBlurHandler = (e: FocusEvent<HTMLButtonElement>) => {
        e.currentTarget.classList.remove(classes.send_message_button_on_click);
    };


    return (
        <form 
            className={classes.new_message_panel}
            onSubmit={props.handleSubmit}>

            <Field component="textarea" rows="1" name="sendMessageField" placeholder="Typing here..."/>

            <div className={classes.send_button_gag}></div>

            <button 
                    className={classes.send_message_button}
                    onClick={onSendMessageHandler}
                    onBlur={onBlurHandler}> Send </button>

            {/* <div className={classes.send_button_wrap}>
                
            </div> */}

    </form>
    );
};

const SendMessageReduxForm = reduxForm<MessageFormType>({form: 'sendMessageField'})(SendMessageForm);

export default SendMessageReduxForm;