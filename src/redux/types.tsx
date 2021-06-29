export type DialogsPageType = {
  users: Array <DialogsUsersType>,
  messages: Array<TestMessageType>,
  newMessageText: string,
};

export  type TestMessageType = {
  messageTxt: string, 
  isUser: boolean,
  avaUrl: string,
  id: string,
};

export type MessagePropsType = {
  message: string,
  isUser: boolean,
}

export type SomeNewMessages = {
  message: string,
  isUser: boolean,
};

export  type DialogsUsersType = {
    href: string,
    description: string,
    online: boolean,
    selected: boolean,
    avaUrl: string,
  };

  
// export  type PropsType = {
//     posts: Array<PostsType>,
//     mainUser: MainUserType,
//     newPostText: string,
//     dispatch: (action: DispatchActionPropsType) => void;
//   };