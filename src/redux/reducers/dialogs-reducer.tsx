import {v1} from 'uuid';
import { DialoglsReducerStateType, DispatchActionPropsType } from '../../App';

const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

export const dialogsReducer = (state: DialoglsReducerStateType, action: DispatchActionPropsType) => {
        switch (action.type){
          case SEND_MESSAGE:
            if (!action.message) return state;
    
            state.messages.push(
              {
                messageTxt: action.message.trim(), 
                isUser: true, 
                avaUrl: 'https://slovnet.ru/wp-content/uploads/2019/01/1-17.jpg', 
                id: v1(),
              }
            );
        
            state.newMessageText = '';

            return state;

          case UPDATE_NEW_MESSAGE_TEXT:
            if (!action.message) return state;

            state.newMessageText = action.message;

            return state;

          default:
            return state;
        };

};

export const addSendMessageCreator = (message: string) => ({type: SEND_MESSAGE, message});

export const onChangeMessageCreator = (message: string)  => ({type: UPDATE_NEW_MESSAGE_TEXT, message});