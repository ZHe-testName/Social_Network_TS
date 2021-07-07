import React, {FocusEvent, MouseEvent} from 'react';

import {addSendMessageCreator, onChangeMessageCreator} from '../../redux/reducers/dialogs-reducer';

import { DispatchActionPropsType } from '../../App';
import Dialogs from './Dialogs';

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

export  type DialogsContainerPropsType = {
    messages: Array<MessageType>,
    newMessageText: string,
    users: Array <UsersType>,
    dispatch: (action: DispatchActionPropsType) => void,
};

function DialogsContainer(props: DialogsContainerPropsType) {
    const {users, messages, newMessageText, dispatch} = props;

    const sendMessageHandler = (text: string) => {
        if (text){
            dispatch(addSendMessageCreator(text));
        }

    };

    const onChangeHandler = (text: string) => {
        if (text){
            dispatch(onChangeMessageCreator(text));
        };
    };

    // const onEnterKey = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    //     console.log(e);
    //     if (e.key === 'Enter'){
    //         console.log('sd');
    //     }
    // };
    
    return (
      <Dialogs 
        users={users}
        messages={messages}
        newMessageText={newMessageText}
        sendMessageHandler={sendMessageHandler}
        onChangeHandler={onChangeHandler}/>
    );
};

export default DialogsContainer;