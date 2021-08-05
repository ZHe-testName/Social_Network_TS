import {v1} from 'uuid';
import { DispatchActionPropsType } from '../../App';
import { ProfileDataType } from '../../App';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
  mainUser: {
    name: 'Zheka',
    surname: 'Khorunzhyi',
    mainUserAvaUrl: 'https://slovnet.ru/wp-content/uploads/2019/01/1-17.jpg',
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

export const profileReducer = (state: ProfileDataType = initialState, action: DispatchActionPropsType) => {
  switch (action.type){
    case ADD_POST:{
      if (!action.message) return state;
  
        const newPost = {
          text: action.message.trim(),
          likes: 0,
          dislikes: 0,
          id: v1(),
        };
        
        const stateCopy = {...state};

        stateCopy.posts = [...state.posts];
        stateCopy.posts.unshift(newPost);
    
        stateCopy.newPostText = '';
        console.log(state.posts);
console.log(stateCopy.posts);
        return stateCopy;
      }

    case UPDATE_NEW_POST_TEXT:{
      if (!action.message) return state;

      const stateCopy = {...state};

      stateCopy.newPostText = action.message;

      return stateCopy;
}
    default:
      return state;
  };
};

export const addPostCreator = (message: string) => ({type: ADD_POST, message});

export const onChangePostCreator = (message: string)  => ({type: UPDATE_NEW_POST_TEXT, message});