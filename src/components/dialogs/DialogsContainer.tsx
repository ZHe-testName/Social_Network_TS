import {addSendMessageCreator, InitialStateType, onChangeMessageCreator} from '../../redux/reducers/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppStateType } from '../../redux/redux-store';

type MapStateToProps = InitialStateType;

type MapDispatchPropsType = {
    sendMessageHandler: (text: string) => void,
    onChangeHandler: (text: string) => void,
};

export type DialogsPropsType = MapStateToProps & MapDispatchPropsType;

const mapStateToProps = (state: AppStateType): InitialStateType => {
    return {
        newMessageText: state.dialogsPage.newMessageText,
        messages: state.dialogsPage.messages,
        users: state.dialogsPage.users,
    };
};

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
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