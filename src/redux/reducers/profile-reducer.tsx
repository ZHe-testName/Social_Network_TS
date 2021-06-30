import {v1} from 'uuid';
import { DispatchActionPropsType } from '../../App';
import { ProfileDataType } from '../../App';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export const profileReducer = (state: ProfileDataType, action: DispatchActionPropsType) => {
  switch (action.type){
    case ADD_POST:
      if (!action.message) return state;
  
        const newPost = {
          text: action.message.trim(),
          likes: 0,
          dislikes: 0,
          id: v1(),
        };
    
        state.posts.unshift(newPost);
    
        state.newPostText = '';

        return state;

    case UPDATE_NEW_POST_TEXT:
      if (!action.message) return state;

      state.newPostText = action.message;

      return state;

    default:
      return state;
  };
};

export const addPostCreator = (message: string) => ({type: ADD_POST, message});

export const onChangePostCreator = (message: string)  => ({type: UPDATE_NEW_POST_TEXT, message});