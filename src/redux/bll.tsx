import {v1} from 'uuid';

const navLinks = [
    {href: '/dialogs', description: 'Messages'},
    {href: '/news', description: 'News'},
    {href: '/settimgs', description: 'Settings'},
    {href: '/profile', description: 'Profile'},
    {href: '/music', description: 'Music'},
  ];

  // {mainUser: 'https://slovnet.ru/wp-content/uploads/2019/01/1-17.jpg', name: 'User'},
  
  const usersConversation = [
    {href: '/dialogs/vasya', description: 'Vasya', online: true,},
    {href: '/dialogs/masha', description: 'Masha', online: true,},
    {href: '/dialogs/vietal', description: 'Vietal', online: false,},
    {href: '/dialogs/somya', description: 'Sonya', online: false,},
    {href: '/dialogs/lena', description: 'Lena', online: true,},
  ];
  
  const myPosts = [
    {text: 'Blablabla my post yo!', likes: 21, dislikes: 10, id: v1()},
    {text: 'Another post, yeh!', likes: 51, dislikes: 69, id: v1()},
    {text: 'What a hell, what is the butifful post?', likes: 121, dislikes: 0, id: v1()},
    {text: 'Stupid post', likes: 21, dislikes: 1110, id: v1()},
    {text: 'Best ever post', likes: 2121, dislikes: 110, id: v1()},
  ];

  const friendsAvatarCards = [
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
  ];
  
  const dataObject = {
    usersConversation,
    navLinks,
    myPosts,
    friendsAvatarCards,
  };

  export default dataObject;