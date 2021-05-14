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
  
  const dataObject = {
    usersConversation,
    navLinks,
    myPosts,
  };

  export default dataObject;