export  type AppPropsType = {
  _state: {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType,
    navBar: NavBarType,
  },
  
  getState: () => {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType,
    navBar: NavBarType,
  },
}

export type ProfilePageType = {
  mainUser: MainUserType,
  posts: Array<PostsType>,
  newPostText: string,
};

export type DialogsPageType = {
  users: Array <DialogsUsersType>,
  messages: Array<TestMessageType>,
  newMessageText: string,
};

export type NavBarType = {
  links: Array<LinkType>,
  friendsArr: Array<FriendsCardsType>,
};


export type NavType = {
    links: Array<LinkType>,
    friendsArr: Array<FriendsCardsType>,
  };
  
export  type AvatarSettings = {
    className: string,
    imgUrl: string,
    width?: number,
    height?: number,
  };
  
export  type AvatarProps = {
    settings: AvatarSettings,
  };
  
export type MessageDescription = {
    avaUrl: string,
    messageTxt: string,
    isUser: boolean,
    id: string,
  };
  
export type ConversationType = {
    messages: Array<MessageType>;
  };
  
  
export  type UsersType = {
    href: string,
    description: string,
    online: boolean,
    selected: boolean,
    avaUrl: string,
  };
  
export  type DialogsPropsType = {
    messages: Array<MessageType>,
    newMessageText: string,
    users: Array <UsersType>,
    dispatch: (action: DispatchPropsType) => void,
  };

export type DialogsNavPropsType = {
  users: Array <UsersType>,
};
  
export  type PostType = {
    text: string,
    likes: number,
    dislikes: number,
    id: string,
  };
  
export  type PostPropsType = {
    newPostText: string,
    dispatch: (action: DispatchPropsType) => void;
  };
  
export  type DispatchPropsType = {
    type: string,
    message?: string,
    id?: string,
    observerFunc?: () => void,
  };

export type FriendsCardsType = {
    avatar?: string,
    name: string,
    href: string,
};
  
export type FriendsNavPropsType = {
    friendsArr: Array<FriendsCardsType>,
};

export type PostsType = {
  text: string,
  likes: number,
  dislikes: number,
  id: string,
};

export type PostsPropsType = {
  posts: Array<PostsType>,
  newPostText: string,
  dispatch: (action: DispatchPropsType) => void;
};  
  
export  type PropsType = {
    posts: Array<PostsType>,
    mainUser: MainUserType,
    newPostText: string,
    dispatch: (action: DispatchPropsType) => void;
  };

export type MessagePropsType = {
  message: string,
  isUser: boolean,
}

export type LinkType = {
  href: string,
  description?: string | Object,
  className?: string,
};
  
export  type MainUserType = {
    name: string,
    surname: string,
    mainUserAvaUrl: string,
  };

  
export type MessageType = {
  avaUrl: string,
  messageTxt: string,
  isUser: boolean,
  id: string,
};

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
  
export  type TestMessageType = {
    messageTxt: string, 
    isUser: boolean,
    avaUrl: string,
    id: string,
  };
