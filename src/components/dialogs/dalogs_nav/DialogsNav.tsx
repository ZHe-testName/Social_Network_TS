import CustomNavLink from '../../custom-nav-link';
import classes from './dialogs_nav.module.css';

type LinkType = {
    href: string,
    description: string,
};

function DialogsNav() {
    return (
        <ul className={classes.users_list}>
            <li className={classes.each_user_li}>
                <CustomNavLink { ...{href: '/dialogs/petya', description: 'Petya'}} />

                <div className={classes.status_indicator}>
                    <div className={classes.indicator_lamp}></div>
                    <span className={classes.indicator_text}>online</span>
                </div>
            </li>
            {/* <li>
                <a href="/dialogs/prtya">Petya</a>
            </li>
            <li>
                <a href="/dialogs/masha">Masha</a>
            </li>
            <li>
                <a href="/dialogs/vitya">Vitya</a>
            </li> */}
        </ul>
    );
};

export default DialogsNav;