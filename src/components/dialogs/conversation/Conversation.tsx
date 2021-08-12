import classes from './conversation.module.css';
import Message from './message';
import {v1} from 'uuid';
import { DialogsMessageType } from '../../../redux/reducers/dialogs-reducer';

export type ConversationType = {
    messages: Array<DialogsMessageType>;
  };

function Conversation(props: ConversationType) {
    const {messages} = props;

    const messagesForRender = messages.map(message => <Message key={v1()} {...message}/>);

    return (
        <ul className={classes.conversation_wrap}>

           {messagesForRender}
           
        </ul>
    );
};

export default Conversation;