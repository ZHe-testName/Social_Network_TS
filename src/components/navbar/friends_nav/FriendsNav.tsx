import classes from './friends_nav.module.css';
import Avatar from '../../avatar';
import CustomNavLink from '../../custom-nav-link';

function FriendsNav() {
    const linkContent = <>
                    <div>Vasya</div>

                    <Avatar settings={{className: classes.friend_avatar, imgUrl: 'https://www.meme-arsenal.com/memes/cc345be87cc4ebce0eac0f9d662358db.jpg'}} />
                </>;

    return (
        <ul className={classes.friends_block}>
            <li className={classes.friend_avatar_box}>
                <a>
                    <div>Vasya</div>

                    <Avatar settings={{className: classes.friend_avatar, imgUrl: 'http://avatar-lotos.at.ua/_si/0/90042470.jpg'}} />
                </a>
            </li>
            
            <li className={classes.friend_avatar_box}>
                <a>
                    <div>Vasya</div>

                    <Avatar settings={{className: classes.friend_avatar, imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIzgUvXLnRImezj5_MMmqHF3aJHbp4vq86Yw&usqp=CAU'}} />
                </a>
            </li>

            <li>
                <CustomNavLink {...{href: './vasya', 
                                    description: linkContent,
                                    className: classes.friend_avatar_box}} />
            </li>

            <li className={classes.friend_avatar_box}>
                <a>
                    <div>Vasya</div>

                    <Avatar settings={{className: classes.friend_avatar, imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPeoq1yV8_WeZRPOy6tvqvBdbl6SAOgNXeWA&usqp=CAU'}} />
                </a>
            </li>

            <li className={classes.friend_avatar_box}>
                <a>
                    <div>Vasya</div>

                    <Avatar settings={{className: classes.friend_avatar, imgUrl: 'http://s020.radikal.ru/i706/1501/36/75ac2f1e2bca.jpg'}} />
                </a>
            </li>
            <a href='#' className={classes.all_friends_link}>
                {'All friends >>'}
            </a>
        </ul>
    );
};

export default FriendsNav;