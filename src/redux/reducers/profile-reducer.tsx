import {v1} from 'uuid';
import { DispatchProfileUserActionType } from '../../App';
import { PostsType } from '../../components/profile/Profile';

const ADD_POST = 'ADD-POST',
  UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT',
  SET_USER_PROFILE = 'SET_USER_PROFILE';


// type InitialState = typeof initialState;

export type ProfileDataType = {
  user: ProfileUserType,
  posts: Array<PostsType>,
  newPostText: string,
};

export type ProfileUserType = {
    aboutMe: string,
    contacts: {
      facebook: string | null,
      website: string | null,
      vk: string | null,
      twitter: string | null,
      instagram: string | null,
      youtube: string | null,
      github: string | null,
      mainLink: string | null,
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string | null,
    fullName: string,
    userId: number,
    photos: {
      small: string | null,
      large: string | null,
    }
};

export type MainUserType = {
  name: string,
  surname: string,
  mainUserAvaUrl: string,
};

export type PostType = {
  text: string, 
  likes: number, 
  dislikes: number, 
  id: string,
};

// {
//   name: 'Zheka',
//   surname: 'Khorunzhyi',
//   mainUserAvaUrl: 'https://slovnet.ru/wp-content/uploads/2019/01/1-17.jpg',
// }

const initialState: ProfileDataType = {
  user: {  
          aboutMe: "sdfsdfsdf",
          contacts: {
            facebook: null,
            website: null,
            vk: null,
            twitter: null,
            instagram: null,
            youtube: null,
            github: null,
            mainLink: null
          },
          lookingForAJob: false,
          lookingForAJobDescription: null,
          fullName: "AlexanderKhodaryonok",
          userId: 3,
          photos: {
            small: null,
            large: null
          },
    },
  posts: [
    {text: 'Blablabla my post yo!', likes: 21, dislikes: 10, id: v1()},
    {text: 'Another post, yeh!', likes: 51, dislikes: 69, id: v1()},
    {text: 'What a hell, what is the butifful post?', likes: 121, dislikes: 0, id: v1()},
    {text: 'Stupid post', likes: 21, dislikes: 1110, id: v1()},
    {text: 'Best ever post', likes: 2121, dislikes: 110, id: v1()},
  ],
  newPostText: '',
};

export const profileReducer = (state: ProfileDataType = initialState, action: DispatchProfileUserActionType): ProfileDataType => {
  switch (action.type){
    case ADD_POST:
      if (!action.message) return state;
      const newPost = {
        text: action.message.trim(),
        likes: 0,
        dislikes: 0,
        id: v1(),
      };

      return {
        ...state,
        posts: [newPost, ...state.posts],
        newPostText: '',
      };
        
    case UPDATE_NEW_POST_TEXT:
      if (!action.message) return state;

      return {
        ...state,
        newPostText: action.message,
      };

    case SET_USER_PROFILE :
      if (!action.userProfile) return state;
      
      return {
        ...state,
        user: action.userProfile,
      };

    default:
      return state;
  };
};

export const addPostCreator = (message: string) => ({type: ADD_POST, message});
export const onChangePostCreator = (message: string)  => ({type: UPDATE_NEW_POST_TEXT, message});
export const setUserProfile = (userProfile: ProfileUserType) => ({type: SET_USER_PROFILE, userProfile});