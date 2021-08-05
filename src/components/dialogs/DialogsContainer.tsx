import {addSendMessageCreator, onChangeMessageCreator} from '../../redux/reducers/dialogs-reducer';

import { DispatchActionPropsType } from '../../App';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

export type MessageType = {
    avaUrl: string,
    messageTxt: string,
    isUser: boolean,
    id: string,
  };

export  type UsersType = {
    href: string,
    description: string,
    online: boolean,
    selected: boolean,
    avaUrl: string,
  };

export  type DialogsContainerPropsType = {
    messages: Array<MessageType>,
    newMessageText: string,
    users: Array <UsersType>,
    dispatch: (action: DispatchActionPropsType) => void,
};
//@ts-ignore

// function DialogsContainer(props: any) {
    // DialogsContainerPropsType
    // const {users, messages, newMessageText, dispatch} = props;

    // const sendMessageHandler = (text: string) => {
    //     if (text){
    //         dispatch(addSendMessageCreator(text));
    //     }

    // };

    // const onChangeHandler = (text: string) => {
    //     if (text){
    //         dispatch(onChangeMessageCreator(text));
    //     };
    // };

    // const onEnterKey = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    //     console.log(e);
    //     if (e.key === 'Enter'){
    //         console.log('sd');
    //     }
    // };
    
//     return (
//         <StoreContext.Consumer> 
//             {
//                 (store) => {
//                     const {users, messages, newMessageText} = store.getState().dialogsPage;

//                     const sendMessageHandler = (text: string) => {
//                         if (text){
//                             store.dispatch(addSendMessageCreator(text));
//                         }
                
//                     };
                
//                     const onChangeHandler = (text: string) => {
//                         if (text){
//                             store.dispatch(onChangeMessageCreator(text));
//                         };
//                     };

//                     return <Dialogs 
//                             users={users}
//                             messages={messages}
//                             newMessageText={newMessageText}
//                             sendMessageHandler={sendMessageHandler}
//                             onChangeHandler={onChangeHandler}/>;
//                 }
//         }
//         </StoreContext.Consumer> 
//     );
// };

const mapStateToProps = (state: any) => {
    return {
        newMessageText: state.dialogsPage.newMessageText,
        messages: state.dialogsPage.messages,
        users: state.dialogsPage.users,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        sendMessageHandler: (text: string) => {
            dispatch(addSendMessageCreator(text))
        },

        onChangeHandler: (text: string) => {
            dispatch(onChangeMessageCreator(text))
        },
    };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;