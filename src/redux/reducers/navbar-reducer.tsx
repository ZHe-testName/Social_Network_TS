import { DispatchActionPropsType } from '../../App';
import { FriendsCardsType } from '../../components/navbar/Navbar';

type NavLinkType = {
  href: string,
  description: string, 
};

export type NavBarType = {
    links: Array<NavLinkType>,
    friendsArr: Array<FriendsCardsType>,
  };

export const navbarReducer = (state: NavBarType, action: DispatchActionPropsType) => {

    return state;
};