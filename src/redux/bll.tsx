import {v1} from 'uuid';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

type DispatchPropsType = {
  type: string,
  message?: string,
  id?: string,
  observerFunc?: () => void,
};

const store =  {
  _state: {
    mainUser: {
      name: 'Zheka',
      surname: 'Khorunzhyi',
      mainUserAvaUrl: 'https://slovnet.ru/wp-content/uploads/2019/01/1-17.jpg',
      newPostText: '',
      newMessageText: '',
    },
    navLinks: [
      {href: '/dialogs', description: 'Messages'},
      {href: '/news', description: 'News'},
      {href: '/settimgs', description: 'Settings'},
      {href: '/profile', description: 'Profile'},
      {href: '/music', description: 'Music'},
    ],
    usersConversation: [


      {
        href: '/dialogs/vasya', 
        description: 'Vasya', 
        online: true, 
        selected: false,
        avaUrl: 'http://s020.radikal.ru/i706/1501/36/75ac2f1e2bca.jpg',
        messageArr: [],
      },
      {
        href: '/dialogs/masha', 
        description: 'Masha', 
        online: true,
        selected: false,
        avaUrl: 'http://avatar-lotos.at.ua/_si/0/90042470.jpg',
        messageArr: [],
      },
      {
        href: '/dialogs/vietal', 
        description: 'Vietal', 
        online: false,
        selected: false,
        avaUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIzgUvXLnRImezj5_MMmqHF3aJHbp4vq86Yw&usqp=CAU',
        messageArr: [],
      },
      {
        href: '/dialogs/somya', 
        description: 'Sonya', 
        online: false,
        selected: false,
        avaUrl: 'https://www.meme-arsenal.com/memes/cc345be87cc4ebce0eac0f9d662358db.jpg',
        messageArr: [],
      },
      {
        href: '/dialogs/lena', 
        description: 'Lena', 
        online: true,
        selected: true,
        avaUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPeoq1yV8_WeZRPOy6tvqvBdbl6SAOgNXeWA&usqp=CAU',
        messageArr: [
          {message: 'Hello!fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff', isUser: true},
          {message: 'Yoy!)!', isUser: true},
          {message: 'You are here!)', isUser: true},
          {message: 'Hey!', isUser: false},
          {message: 'Yes, WTF?', isUser: false},
        ],
      },
    ],
    myPosts: [
      {text: 'Blablabla my post yo!', likes: 21, dislikes: 10, id: v1()},
      {text: 'Another post, yeh!', likes: 51, dislikes: 69, id: v1()},
      {text: 'What a hell, what is the butifful post?', likes: 121, dislikes: 0, id: v1()},
      {text: 'Stupid post', likes: 21, dislikes: 1110, id: v1()},
      {text: 'Best ever post', likes: 2121, dislikes: 110, id: v1()},
    ],
    friendsAvatarCards: [
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
    testMessagesArr: [
      {  
        id: v1(),
        messageTxt: 'Hello!)', 
        isUser: true,
        avaUrl: 'https://slovnet.ru/wp-content/uploads/2019/01/1-17.jpg',
      },
      {  
        id: v1(),
        messageTxt: 'Yo!)', 
        isUser: true, 
        avaUrl: 'https://slovnet.ru/wp-content/uploads/2019/01/1-17.jpg',
      },
      {  
        id: v1(),
        messageTxt: 'You are here!)',
        isUser: true, 
        avaUrl: 'https://slovnet.ru/wp-content/uploads/2019/01/1-17.jpg',
      },
      {  
        id: v1(),
        messageTxt: 'Hey, yes WTF?',
        isUser: false, 
        avaUrl: 'https://www.meme-arsenal.com/memes/cc345be87cc4ebce0eac0f9d662358db.jpg',
      },
      { 
        id: v1(), 
        messageTxt: 'I wona ask you about some little things of our feature trip... ', 
        isUser: true, 
        avaUrl: 'https://slovnet.ru/wp-content/uploads/2019/01/1-17.jpg',
      },
      {  
        id: v1(),
        messageTxt: 'When? Where? How Much?)',
        isUser: true, 
        avaUrl: 'https://slovnet.ru/wp-content/uploads/2019/01/1-17.jpg',
      },
      {  
        id: v1(),
        messageTxt: 'Damn..! I drop all ditails to your email 2 days ago...',
        isUser: false, 
        avaUrl: 'https://www.meme-arsenal.com/memes/cc345be87cc4ebce0eac0f9d662358db.jpg',
      },
      {  
        id: v1(),
        messageTxt: 'Ooopss...) Thanks, see your, sis!))',
        isUser: true, 
        avaUrl: 'https://slovnet.ru/wp-content/uploads/2019/01/1-17.jpg',
      },
    ],
  },
  _callSubscriber(){

  },

  dispatch(action: DispatchPropsType){
    if (action.type === 'ADD-POST'){
      if (!action.message) return;

      const newPost = {
        text: action.message.trim(),
        likes: 0,
        dislikes: 0,
        id: v1(),
      };
  
      this._state.myPosts.push(newPost);
  
      this._state.mainUser.newPostText = '';
      
      this._callSubscriber();
    };

    if (action.type === 'UPDATE-NEW-POST-TEXT' && action.message){
      this._state.mainUser.newPostText = action.message;

      this._callSubscriber();
    };

    if (action.type === 'SEND_MESSAGE'){
      console.log('start');
      if (!action.message) return;

      this._state.testMessagesArr.push(
        {
          messageTxt: action.message.trim(), 
          isUser: true, 
          avaUrl: this._state.mainUser.mainUserAvaUrl, 
          id: v1(),
        }
      );
  
      this._state.mainUser.newMessageText = '';
  
      this._callSubscriber();
    };

    if (action.type === 'UPDATE_NEW_MESSAGE_TEXT' && action.message){
      this._state.mainUser.newMessageText = action.message;

      this._callSubscriber();
    };

    if (action.type === 'SUBSCRIBE' && action.observerFunc){
      this._callSubscriber = action.observerFunc;
    };
  },

  getState(){
    return this._state;
  },
  // sendMessage(messageText: string = ''){
  //   if (!messageText) return;

  //   this._state.testMessagesArr.push(
  //     {
  //       messageTxt: messageText.trim(), 
  //       isUser: true, 
  //       avaUrl: this._state.mainUser.mainUserAvaUrl, 
  //       id: v1(),
  //     }
  //   );

  //   this._state.mainUser.newMessageText = '';

  //   this._callSubscriber();
  // },

};

export const addPostCreator = (message: string) => ({type: ADD_POST, message});

export const onChangePostCreator = (message: string)  => ({type: UPDATE_NEW_POST_TEXT, message});


export const addSendMessageCreator = (message: string) => ({type: SEND_MESSAGE, message});

export const onChangeMessageCreator = (message: string)  => ({type: UPDATE_NEW_MESSAGE_TEXT, message});

export default store;