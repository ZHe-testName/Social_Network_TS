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

const initialState =  {
  links: [
    {href: '/users', description: 'Users'},
    {href: '/dialogs', description: 'Dialogs'},
    {href: '/news', description: 'News'},
    {href: '/settimgs', description: 'Settings'},
    {href: '/profile', description: 'Profile'},
    {href: '/music', description: 'Music'},
  ],
  friendsArr: [
    { avatar: 'http://s020.radikal.ru/i706/1501/36/75ac2f1e2bca.jpg', 
      name: 'Vasya', 
      href: '/vasya',
    },

    { avatar: 'http://avatar-lotos.at.ua/_si/0/90042470.jpg',
      name: 'Masha',
      href: '/masha',
    },

    { avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIzgUvXLnRImezj5_MMmqHF3aJHbp4vq86Yw&usqp=CAU', 
      name: 'Vietal', 
      href: '/vietal',
    },

    { avatar: 'https://www.meme-arsenal.com/memes/cc345be87cc4ebce0eac0f9d662358db.jpg', 
      name: 'Sonya',
      href: '/sonya',
    },

    { avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPeoq1yV8_WeZRPOy6tvqvBdbl6SAOgNXeWA&usqp=CAU', 
      name: 'Lena', 
      href: '/lena',
    },
  ],
}

export const navbarReducer = (state: NavBarType = initialState, action: DispatchActionPropsType) => {

    return state;
};