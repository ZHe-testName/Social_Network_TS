import classes from './dialogs.module.css';
import Conversation from './conversations';
import DialogsNav from './dalogs_nav';

function Dialogs() {
    return (
        <div className={classes.dialogs_wrap}>
            <h2 className={classes.dialogs_header}>Dialogs</h2>

            <nav className={classes.dialogs_nav}>
                <DialogsNav />
            </nav>

            <div className={classes.dialogs_conversation}>
                <Conversation />
            </div>
        </div>
    );
};

export default Dialogs;