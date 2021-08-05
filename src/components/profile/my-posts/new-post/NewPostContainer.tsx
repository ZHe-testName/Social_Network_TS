import NewPost from './NewPost';

import {addPostCreator, onChangePostCreator} from '../../../../redux/reducers/profile-reducer';
import { DispatchActionPropsType, ProfileDataType } from '../../../../App';
import { connect } from 'react-redux';
import { DialogsPageType } from '../../../../redux/types';
import { NavType } from '../../../navbar/Navbar';

export type NewPostContainerPropsType = {
    newPostText: string,
    dispatch: (action: DispatchActionPropsType) => void;
};

export type EntireTreePropsType = {
    state: {
      profilePage: ProfileDataType,
      dialogsPage: DialogsPageType,
      navBar: NavType,
    },
  };

// function NewPostContainer(props: NewPostContainerPropsType) {
    
//     const {newPostText, dispatch} = props;

//     const addNewPostHandler = (text:string) => {
//         if (text){
//             dispatch(addPostCreator(text));
//         };
//     };

//     const onChangeHandler = (text:string) => {
//         if (text){
//             dispatch(onChangePostCreator(text));
//         };
//     };

//     return (
//         <NewPost 
//             newPostText={newPostText}
//             addNewPostHandler={addNewPostHandler}
//             onChangeHandler={onChangeHandler}/>
//     );
// };
const mapStateToProps = (state: any) => {
    return {
        mainUser: state.profilePage.mainUser,
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        addNewPostHandler: (text: string) => {
            dispatch(addPostCreator(text))
        },

        onChangeHandler: (text: string) => {
            dispatch(onChangePostCreator(text))
        },
    };
};

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost);



export default NewPostContainer;