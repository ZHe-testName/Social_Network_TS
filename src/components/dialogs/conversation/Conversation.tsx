import classes from './conversation.module.css';
import Message from './message';

function Conversation() {
    return (
        <div className={classes.conversation_wrap}>
            <Message {...{messageTxt: 'Hello!)fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff', avaUrl: 'https://slovnet.ru/wp-content/uploads/2019/01/1-17.jpg'}}/>
            <Message {...{messageTxt: 'Yoy!)', avaUrl: 'https://slovnet.ru/wp-content/uploads/2019/01/1-17.jpg'}}/>
            <Message {...{messageTxt: 'You here?', avaUrl: 'https://slovnet.ru/wp-content/uploads/2019/01/1-17.jpg'}}/>
        </div>
    );
};

export default Conversation;