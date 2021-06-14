import {v1} from 'uuid';

import {DispatchActionPropsType, DialoglsReducerStateType} from '../types';

const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

export const dialogsReducer = (state: DialoglsReducerStateType, action: DispatchActionPropsType) => {
        if (action.type === SEND_MESSAGE){
        if (!action.message) return;
  
        state.messages.push(
          {
            messageTxt: action.message.trim(), 
            isUser: true, 
            avaUrl: 'https://slovnet.ru/wp-content/uploads/2019/01/1-17.jpg', 
            id: v1(),
          }
        );
    
        state.newMessageText = '';
      };
  
      if (action.type === UPDATE_NEW_MESSAGE_TEXT && action.message){
        state.newMessageText = action.message;
      };

    return state;
};