const navLinks = [
    {href: '/dialogs', description: 'Messages'},
    {href: '/news', description: 'News'},
    {href: '/settimgs', description: 'Settings'},
    {href: '/profile', description: 'Profile'},
    {href: '/music', description: 'Music'},
  ];
  
  const usersConversation = [
    {href: '/dialogs/vasya', description: 'Vasya', online: true,},
    {href: '/dialogs/masha', description: 'Masha', online: true,},
    {href: '/dialogs/vietal', description: 'Vietal', online: false,},
    {href: '/dialogs/somya', description: 'Sonya', online: false,},
    {href: '/dialogs/lena', description: 'Lena', online: true,},
  ];
  
  const myPosts = [
    {text: 'Blablabla my post yo!', likes: 21, dislikes: 10, id: 'post_1'},
    {text: 'Another post, yeh!', likes: 51, dislikes: 69, id: 'post_2'},
    {text: 'What a hell, what is the butifful post?', likes: 121, dislikes: 0, id: 'post_3'},
    {text: 'Stupid post', likes: 21, dislikes: 1110, id: 'post_4'},
    {text: 'Best ever post', likes: 2121, dislikes: 110, id: 'post_5'},
  ];

  const avatarImgUrls = [
    {mainUser: 'https://slovnet.ru/wp-content/uploads/2019/01/1-17.jpg'},
    {vasya: 'http://s020.radikal.ru/i706/1501/36/75ac2f1e2bca.jpg'},
    {masha: 'http://avatar-lotos.at.ua/_si/0/90042470.jpg'},
    {vietal: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIzgUvXLnRImezj5_MMmqHF3aJHbp4vq86Yw&usqp=CAU'},
    {sonya: 'https://www.meme-arsenal.com/memes/cc345be87cc4ebce0eac0f9d662358db.jpg'},
    {lena: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPeoq1yV8_WeZRPOy6tvqvBdbl6SAOgNXeWA&usqp=CAU'},
  ];
  
  const dataObject = {
    usersConversation,
    navLinks,
    myPosts,
  };

  export default dataObject;