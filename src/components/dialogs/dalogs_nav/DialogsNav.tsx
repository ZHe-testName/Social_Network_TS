import { DialogsUserType } from '../../../redux/reducers/dialogs-reducer';
import CustomNavLink from '../../custom-nav-link';
import classes from './dialogs_nav.module.css';

type DialogsNavPropsTYpe = {
    users: Array<DialogsUserType>,
};

function DialogsNav(props: DialogsNavPropsTYpe) {
    const {users} = props;

    const indicatorJsx = <div className={classes.status_indicator}>
                            <div className={classes.indicator_lamp}></div>
                            <span className={classes.indicator_text}>online</span>
                        </div>;

    const usersArr = users.map((user: DialogsUserType) => {
        return  <li key={user.href} className={classes.each_user_li}>
                    <CustomNavLink { ...user} />

                    {user.online ? indicatorJsx : null}
                </li>;
    });

    return (
        <ul className={classes.users_list}>

            {usersArr}

        </ul>
    );
};

export default DialogsNav;