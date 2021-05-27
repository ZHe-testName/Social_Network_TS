import classes from './dialogs.module.css';
import Conversation from './conversation';
import DialogsNav from './dalogs_nav';
import React from 'react';

type UsersType = {
    href: string,
    description: string,
    online: boolean,
    selected: boolean,
    avaUrl: string,
    messageArr: Array <MessageType>,
};

type MessageType = {
    message: string,
    isUser: boolean,
};

type MainUserType = {
    name: string,
    surname: string,
    mainUserAvaUrl: string,
};

type ConversationMessagesType = {
    avaUrl: string,
    isUser: boolean,
    messageArr: [],
};

type DialogsPropsType = {
    mainUser: MainUserType,
    users: Array <UsersType>,
    sendMessage: (messageText: string | undefined) => void,
};

function Dialogs(props: DialogsPropsType) {
    const {users, sendMessage, mainUser} = props;

    const newMessageElement = React.createRef<HTMLTextAreaElement>();

    let conversation = {...users.find(user => user.selected)};

    const messagesArr = conversation ? conversation.messageArr : [];

    const renderMessageArr = messagesArr?.map(messageObj => {
        return messageObj.isUser ? {avaUrl: mainUser.mainUserAvaUrl, ...messageObj} : 
                                    {avaUrl: conversation.avaUrl, ...messageObj};
    });

    console.log(conversation);

    // conversation.messageArr?.push({})
    const sendMessageHandler = () => {
        const messageTxt = newMessageElement.current?.value;
        sendMessage(messageTxt);
    };

    return (
        <div className={classes.dialogs_wrap}>
            <h2 className={classes.dialogs_header}>Dialogs</h2>

            <nav className={classes.dialogs_nav}>
                <DialogsNav users={users}/>
            </nav>

            <div className={classes.dialogs_conversation_outside_box}>

                <div className={classes.dialogs_conversation}>
                    <Conversation />
                </div>

                <div className={classes.new_message_panel}>
                    <textarea   
                                ref={newMessageElement}
                                rows={1}
                                placeholder="Typing here...">

                    </textarea>

                    <button 
                            className={classes.send_message_button}
                            onClick={sendMessageHandler}>
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;