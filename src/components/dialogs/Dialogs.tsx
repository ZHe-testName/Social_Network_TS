import React, {FocusEvent, MouseEvent} from 'react';

import {addSendMessageCreator, onChangeMessageCreator} from '../../redux/reducers/dialogs-reducer';

import classes from './dialogs.module.css';
import Conversation from './conversation';
import DialogsNav from './dalogs_nav';
import { DispatchActionPropsType } from '../../App';

export type MessageType = {
    avaUrl: string,
    messageTxt: string,
    isUser: boolean,
    id: string,
  };

export  type UsersType = {
    href: string,
    description: string,
    online: boolean,
    selected: boolean,
    avaUrl: string,
  };

export  type DialogsPropsType = {
    messages: Array<MessageType>,
    newMessageText: string,
    users: Array <UsersType>,
    dispatch: (action: DispatchActionPropsType) => void,
};

function Dialogs(props: DialogsPropsType) {
    const {users, messages, newMessageText, dispatch} = props;

    const newMessageElement = React.createRef<HTMLTextAreaElement>();
    const sendButton = React.createRef<HTMLButtonElement>();

    const sendMessageHandler = (e: MouseEvent<HTMLButtonElement>) => {
        if (newMessageElement.current?.value){
            const messageTxt = newMessageElement.current.value;

            dispatch(addSendMessageCreator(messageTxt));

            e.currentTarget.classList.add(classes.send_message_button_on_click);
        }

    };

    const onBlurHandler = (e: FocusEvent<HTMLButtonElement>) => {
        e.currentTarget.classList.remove(classes.send_message_button_on_click);
    };

    const onChangeHandler = () => {
        if (newMessageElement.current?.value){
            const messageTxt = newMessageElement.current.value;

            dispatch(onChangeMessageCreator(messageTxt));
        };
    };

    // const onEnterKey = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    //     console.log(e);
    //     if (e.key === 'Enter'){
    //         console.log('sd');
    //     }
    // };
    
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

                <div className={classes.new_message_panel}>
                    <textarea   
                            value={newMessageText}
                            ref={newMessageElement}
                            rows={1}
                            placeholder="Typing here..."
                            onChange={onChangeHandler}>

                    </textarea>

                    <div className={classes.send_button_gag}></div>

                    <button 
                            className={classes.send_message_button}
                            ref={sendButton}
                            onClick={sendMessageHandler}
                            onBlur={onBlurHandler}> Send </button>

                    {/* <div className={classes.send_button_wrap}>
                        
                    </div> */}

                </div>
            </div>
        </div>
    );
};

export default Dialogs;