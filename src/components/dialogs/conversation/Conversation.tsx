import classes from './conversation.module.css';
import Message from './message';

type MessageType = {
    avaUrl: string,
    messageTxt: string,
    isUser: boolean,
};

type ConversationType = {
    messages: Array<MessageType> | Array<void>;
};

function Conversation() {
    return (
        <div className={classes.conversation_wrap}>
            <Message {...{  messageTxt: 'Hello!)fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff', 
                            avaUrl: 'https://slovnet.ru/wp-content/uploads/2019/01/1-17.jpg',
                            isUser: true}}/>
            <Message {...{  messageTxt: 'Yoy!)', isUser: true, avaUrl: 'https://slovnet.ru/wp-content/uploads/2019/01/1-17.jpg'}}/>
            <Message {...{  messageTxt: 'You are here!)',isUser: true, avaUrl: 'https://slovnet.ru/wp-content/uploads/2019/01/1-17.jpg'}}/>
            <Message {...{  messageTxt: 'Hey, yes WTF?',
                            isUser: false, avaUrl: 'https://www.meme-arsenal.com/memes/cc345be87cc4ebce0eac0f9d662358db.jpg'}}/>
        </div>
    );
};

export default Conversation;