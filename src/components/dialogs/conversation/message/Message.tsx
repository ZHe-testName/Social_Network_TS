import classes from './message.module.css';
import Avatar from '../../../avatar';

type AvatarSettings = {
    className: string,
    imgUrl: string,
};

type MessageDescription = {
    avaUrl: string,
    messageTxt: string,
    isUser: boolean,
};

function Message(props: MessageDescription) {
    const {messageTxt, avaUrl, isUser} = props;

    const className = isUser ? classes.message_user_wrap : classes.message_guest_wrap;

    return (
        <div className={className}>
            <Avatar settings={{className: classes.messaage_avatar, imgUrl: avaUrl}}/>

            <div className={classes.message_txt}>{messageTxt}</div>
        </div>
    );
};

export default Message;