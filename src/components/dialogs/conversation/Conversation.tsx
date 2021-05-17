import classes from './conversation.module.css';
import Message from './message';

function Conversation() {
    return (
        <div className={classes.conversation_wrap}>
            <Message {...{  messageTxt: 'Hello!)fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff', 
                            avaUrl: 'https://slovnet.ru/wp-content/uploads/2019/01/1-17.jpg',
                            isUser: true}}/>
            <Message {...{  messageTxt: 'Yoy!)', isUser: true, avaUrl: 'https://slovnet.ru/wp-content/uploads/2019/01/1-17.jpg'}}/>
            <Message {...{  messageTxt: 'You are here!)',isUser: true, avaUrl: 'https://slovnet.ru/wp-content/uploads/2019/01/1-17.jpg'}}/>
            <Message {...{  messageTxt: 'Hey, yes WTF?rffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
                            isUser: false, avaUrl: 'http://avatar-lotos.at.ua/_si/0/90042470.jpg'}}/>
        </div>
    );
};

export default Conversation;