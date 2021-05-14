import classes from './message.module.css';
import Avatar from '../../../avatar';

type AvatarSettings = {
    className: string,
    imgUrl: string,
};

type MessageDescription = {
    avaUrl: string,
    messageTxt: string,
};

function Message(props: MessageDescription) {
    const {messageTxt, avaUrl} = props;

    return (
        <div className={classes.message_wrap}>
            <Avatar settings={{className: classes.messaage_avatar, imgUrl: avaUrl}}/>

            <div className={classes.message_txt}>{messageTxt}</div>
        </div>
    );
};

export default Message;