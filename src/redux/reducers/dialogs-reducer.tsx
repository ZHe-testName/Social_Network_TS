import {v1} from 'uuid';
import { DispatchActionPropsType } from '../../App';

export type DialogsUserType = {
  href: string, 
  description: string, 
  online: boolean, 
  selected: boolean,
  avaUrl: string,
};

export type DialogsMessageType = {
  id: string,
  messageTxt: string, 
  isUser: boolean,
  avaUrl: string,
};

export type InitialStateType = typeof initialState;

const SEND_MESSAGE = 'dialogs/SEND_MESSAGE';

const initialState =  {
  users: [
    {
      href: '/dialogs/vasya', 
      description: 'Vasya', 
      online: true, 
      selected: false,
      avaUrl: 'http://s020.radikal.ru/i706/1501/36/75ac2f1e2bca.jpg',
    },
    {
      href: '/dialogs/masha', 
      description: 'Masha', 
      online: true,
      selected: false,
      avaUrl: 'http://avatar-lotos.at.ua/_si/0/90042470.jpg',
    },
    {
      href: '/dialogs/vietal', 
      description: 'Vietal', 
      online: false,
      selected: false,
      avaUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIzgUvXLnRImezj5_MMmqHF3aJHbp4vq86Yw&usqp=CAU',
    },
    {
      href: '/dialogs/somya', 
      description: 'Sonya', 
      online: false,
      selected: false,
      avaUrl: 'https://www.meme-arsenal.com/memes/cc345be87cc4ebce0eac0f9d662358db.jpg',
    },
    {
      href: '/dialogs/lena', 
      description: 'Lena', 
      online: true,
      selected: true,
      avaUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPeoq1yV8_WeZRPOy6tvqvBdbl6SAOgNXeWA&usqp=CAU',
      // messageArr: [
      //   {message: 'Hello!fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff', isUser: true},
      //   {message: 'Yoy!)!', isUser: true},
      //   {message: 'You are here!)', isUser: true},
      //   {message: 'Hey!', isUser: false},
      //   {message: 'Yes, WTF?', isUser: false},
      // ],
    },
  ] as Array<DialogsUserType>,

  messages: [
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
  ] as Array<DialogsMessageType>,
}



export const dialogsReducer = (state: InitialStateType = initialState, action: DispatchActionPropsType): InitialStateType => {
        switch (action.type){
          case SEND_MESSAGE:{
            if (!action.message) return state;

            const messageObj =  {
              messageTxt: action.message.trim(), 
              isUser: true, 
              avaUrl: 'https://slovnet.ru/wp-content/uploads/2019/01/1-17.jpg', 
              id: v1(),
            }

            return {
              ...state,
              messages: [...state.messages, messageObj],
            };
          
          }

          default:
            return state;
        };

};

export const addSendMessageCreator = (message: string) => ({type: SEND_MESSAGE, message});
