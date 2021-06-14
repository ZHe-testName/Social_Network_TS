import {v1} from 'uuid';

import {DispatchActionPropsType, ProfilePageType} from '../types';


const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export const profileReducer = (state: ProfilePageType, action: DispatchActionPropsType) => {
    if (action.type === ADD_POST){
        if (!action.message) return;
  
        const newPost = {
          text: action.message.trim(),
          likes: 0,
          dislikes: 0,
          id: v1(),
        };
    
        state.posts.push(newPost);
    
        state.newPostText = '';
      };
  
      if (action.type === UPDATE_NEW_POST_TEXT && action.message){
        state.newPostText = action.message;
      };

    return state;
};

export const addPostCreator = (message: string) => ({type: ADD_POST, message});

export const onChangePostCreator = (message: string)  => ({type: UPDATE_NEW_POST_TEXT, message});