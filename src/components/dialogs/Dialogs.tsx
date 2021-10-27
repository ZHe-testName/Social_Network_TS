import React, {FocusEvent, MouseEvent} from 'react';

import classes from './dialogs.module.css';
import Conversation from './conversation';
import DialogsNav from './dalogs_nav';
import { DialogsPropsType } from './DialogsContainer';
import { Field, reduxForm } from 'redux-form';


function Dialogs(props: DialogsPropsType) {
    const {users, messages, newMessageText, onChangeHandler, sendMessageHandler} = props;

    const newMessageElement = React.createRef<HTMLTextAreaElement>();


    // const onEnterKey = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    //     console.log(e);
    //     if (e.key === 'Enter'){
    //         console.log('sd');
    //     }
    // };

    // if (!isAuth) return <Redirect to='/login'/>
    
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

                <SendMessageReduxForm />
            </div>
        </div>
    );
};

const SendMessageForm = (prpos: any) => {
    const sendButton = React.createRef<HTMLButtonElement>();

    const onSendMessageHandler = (e: MouseEvent<HTMLButtonElement>) => {
            e.currentTarget.classList.add(classes.send_message_button_on_click);
    };

    const onBlurHandler = (e: FocusEvent<HTMLButtonElement>) => {
        e.currentTarget.classList.remove(classes.send_message_button_on_click);
    };


    return (
        <form 
            className={classes.new_message_panel}
            onSubmit={prpos.handleSubmit}>
            {/* <textarea   
                    value={newMessageText}
                    ref={newMessageElement}
                    rows={1}
                    placeholder="Typing here..."
                    onChange={onChangeTextHandler}>

            </textarea> */}
            <Field component="textarea" rows="1" name="sendMessageField" placeholder="Typing here..."/>

            <div className={classes.send_button_gag}></div>

            <button 
                    className={classes.send_message_button}
                    ref={sendButton}
                    onClick={onSendMessageHandler}
                    onBlur={onBlurHandler}> Send </button>

            {/* <div className={classes.send_button_wrap}>
                
            </div> */}

    </form>
    );
};

const SendMessageReduxForm = reduxForm({form: 'sendMessageField'})(SendMessageForm);

export default Dialogs;