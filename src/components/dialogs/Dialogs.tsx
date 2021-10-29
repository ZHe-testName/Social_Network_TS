import React from 'react';
import classes from './dialogs.module.css';
import Conversation from './conversation';
import DialogsNav from './dalogs_nav';
import { DialogsPropsType } from './DialogsContainer';
import SendMessageReduxForm, { MessageFormType } from './send_message_form/SendMessageReduxForm';

function Dialogs(props: DialogsPropsType) {
    const {users, messages, sendMessageHandler} = props;

    // const onEnterKey = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    //     console.log(e);
    //     if (e.key === 'Enter'){
    //         console.log('sd');
    //     }
    // };

    // if (!isAuth) return <Redirect to='/login'/> 
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

export default Dialogs;