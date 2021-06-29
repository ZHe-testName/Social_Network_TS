import classes from  './navbar.module.css';

import CustomNavLink from '../custom-nav-link';
import FriendsNav from "./friends_nav";

export type FriendsCardsType = {
  avatar?: string,
  name: string,
  href: string,
};

export type LinkType = {
  href: string,
  description?: string | Object,
  className?: string,
};

export type NavType = {
  links: Array<LinkType>,
  friendsArr: Array<FriendsCardsType>,
};

function Navbar(props: NavType) {
    const {links, friendsArr} = props;

    const linksArr = links.map((linkSettings: LinkType) => {
      return <li key={linkSettings.href} ><CustomNavLink {...linkSettings} /></li>
    });

    return(
      <nav className={classes.main_nav_bar}>
        <ul className={classes.ul_nav_bar}>
          {linksArr}
        </ul>

        <FriendsNav friendsArr={friendsArr}/>
      </nav>
    );
};

export default Navbar;