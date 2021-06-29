import { DialoglsReducerStateType } from '../../App';
import { FriendsCardsType, LinkType } from '../../components/navbar/Navbar';

export type NavBarType = {
    links: Array<LinkType>,
    friendsArr: Array<FriendsCardsType>,
  };

export const navbarReducer = (state: DialoglsReducerStateType, action: NavBarType) => {

    return state;
};