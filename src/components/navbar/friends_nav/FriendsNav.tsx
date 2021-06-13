import classes from './friends_nav.module.css';
import Avatar from '../../avatar';
import CustomNavLink from '../../custom-nav-link';

import {FriendsNavPropsType} from '../../../redux/types';

// идея №1
// максимальное количество отображаемых элэментов = 8
// при клике на кастомную прокрутку прокрутку
// будут подгружатся следующие/предидущие карточки с друзями 

function FriendsNav(props: FriendsNavPropsType) {
    const {friendsArr} = props;

    const cardsArr = friendsArr.map(card => {
        const {avatar = '', name, href} = card;

        const linkContent = <>
                                <div>{name}</div>

                                <Avatar settings={{className: classes.friend_avatar, imgUrl: avatar}} />
                            </>;

        
        return (
            <li key={href}>
                <CustomNavLink {...{href: href, 
                                    description: linkContent,
                                    className: classes.friend_avatar_box}} />
            </li>
        );
    });

    return (
        <>
            <ul className={classes.friends_block}>

               {cardsArr}

            </ul>

            <CustomNavLink {...{href: '/all_friends', className: classes.all_friends_link, description: 'To all friends >>'}}/>
        </>
    );
};

export default FriendsNav;