import React, {FocusEvent, MouseEvent} from 'react';

import classes from './dialogs.module.css';
import Conversation from './conversation';
import DialogsNav from './dalogs_nav';
import { DialogsPropsType } from './DialogsContainer';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

type MessageFormType = {
    sendMessageField: string,
};


function Dialogs(props: DialogsPropsType) {
    const {users, messages, sendMessageHandler} = props;

    // const onEnterKey = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    //     console.log(e);
    //     if (e.key === 'Enter'){
    //         console.log('sd');
    //     }
    // };

    // if (!isAuth) return <Redirect to='/login'/> props , newMessageText, onChangeHandler, sendMessageHandler
    const addMessage = (formData: MessageFormType) => {
        sendMessageHandler(formData.sendMessageField);
    };
    
    return (
        <div className={classes.dialogs_wrap}>
            <h2 className={classes.dialogs_header}>Dialogs</h2>

            <nav className={classes.dialogs_nav}>
                <DialogsNav users={users}/>
            </nav>

            <div className={classes.dialogs_conversation_outside_box}>

                <div className={classes.dialogs_conversation}>
                    <Conversation messages={messages} />
                </div>

                <SendMessageReduxForm onSubmit={addMessage}/>
            </div>
        </div>
    );
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

export default Dialogs;