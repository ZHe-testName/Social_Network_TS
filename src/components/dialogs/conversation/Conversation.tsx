import classes from './conversation.module.css';
import Message from './message';

type MessageType = {
    avaUrl: string,
    messageTxt: string,
    isUser: boolean,
};

type ConversationType = {
    messages: Array<MessageType>;
};

function Conversation(props: ConversationType) {
    const {messages} = props;

    const messagesForRender = messages.map(message => <Message {...message}/>);

    return (
        <div className={classes.conversation_wrap}>

           {messagesForRender}
           
        </div>
    );
};

export default Conversation;