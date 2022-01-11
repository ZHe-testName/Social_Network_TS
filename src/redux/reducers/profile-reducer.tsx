import { Dispatch } from 'react';
import {v1} from 'uuid';
import { profileAPI } from '../../api/dal';
import { DispatchUsersActionType } from '../../App';
import { PostsType } from '../../components/profile/Profile';

const ADD_POST = 'ADD-POST',
  SET_USER_PROFILE = 'SET_USER_PROFILE',
  SET_STATUS = 'SET_STATUS',
  INCPEMENT_POST_LIKE = 'INCPEMENT_POST_LIKE',
  INCPEMENT_POST_DISLIKE = 'INCPEMENT_POST_DISLIKE';

export type DispatchProfileUserActionType = {
    type: string,
    message?: string,
    userProfile?: ProfileUserType,
    status?: string,
    userId?: number,
    postId?: string,
  };

export type ProfileDataType = {
  user: ProfileUserType,
  posts: Array<PostsType>,
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
    status: string,
    lookingForAJob: boolean,
    lookingForAJobDescription: string | null,
    fullName: string,
    userId: number,
    photos: {
      small: string | null,
      large: string | null,
    }
} | null;

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
  // user: {  
  //         aboutMe: "sdfsdfsdf",
  //         contacts: {
  //           facebook: null,
  //           website: null,
  //           vk: null,
  //           twitter: null,
  //           instagram: null,
  //           youtube: null,
  //           github: null,
  //           mainLink: null
  //         },
  //         lookingForAJob: false,
  //         lookingForAJobDescription: null,
  //         fullName: "AlexanderKhodaryonok",
  //         userId: 3,
  //         photos: {
  //           small: null,
  //           large: null
  //         },
  //   },
  user: null,
  posts: [
    {text: 'Blablabla my post yo!', likes: 21, dislikes: 10, id: v1()},
    {text: 'Another post, yeh!', likes: 51, dislikes: 69, id: v1()},
    {text: 'What a hell, what is the butifful post?', likes: 121, dislikes: 0, id: v1()},
    {text: 'Stupid post', likes: 21, dislikes: 1110, id: v1()},
    {text: 'Best ever post', likes: 2121, dislikes: 110, id: v1()},
  ],
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
      };

    case SET_USER_PROFILE :
      if (!action.userProfile) return state;
      
      return {
        ...state,
        user: action.userProfile,
      };

    case SET_STATUS :
      if (!state.user) return state;

      return {
        ...state,
        user: {
          ...state.user,
          status: action.status ? action.status : '',
        },
      };

      case INCPEMENT_POST_LIKE :
        if (!state.user) return state;
  
        return {
          ...state,
          posts: state.posts.map(post => post.id === action.postId 
                                            ? {...post, likes: post.likes + 1}
                                            : post)
        };

      case INCPEMENT_POST_DISLIKE :
        if (!state.user) return state;
  
        return {
          ...state,
          posts: state.posts.map(post => post.id === action.postId 
                                            ? {...post, dislikes: post.dislikes + 1}
                                            : post)
        };

    default:
      return state;
  };
};

export const addPostCreator = (message: string) => ({type: ADD_POST, message});
export const setUserProfileAC = (userProfile: ProfileUserType) => ({type: SET_USER_PROFILE, userProfile});
export const setStatusAC = (status: string) => ({type: SET_STATUS, status});
export const incrementPostLikeAC = (userId: number, postId: string) => ({type: INCPEMENT_POST_LIKE, userId, postId});
export const incrementPostDislikeAC = (userId: number, postId: string) => ({type: INCPEMENT_POST_DISLIKE, userId, postId});

export const getStatusThunkCreator = (userId: string) => {
  return (dispatch: Dispatch<DispatchProfileUserActionType>) => {
    profileAPI.getProfileStatus(userId)
          .then(status => {
            dispatch(setStatusAC(status))
          });
  };
};

export const updateStatusThunkCreator = (status: string) => {
  return (dispatch: Dispatch<DispatchProfileUserActionType>) => {
    profileAPI.setProfileStatus(status)
          .then(resCode => {
            if (!resCode) {
              dispatch(setStatusAC(status))
            };
          });
  };
};

type GetStatusThunkCreatorType = {
  (dispatch: Dispatch<DispatchProfileUserActionType>): void
};

export const getProfileThunkCreator = (userId: string) => {
  return (dispatch: Dispatch<DispatchUsersActionType | GetStatusThunkCreatorType>) => {
    profileAPI.getProfile(userId)
                    .then(data => {
                        dispatch(setUserProfileAC(data));

                        dispatch(getStatusThunkCreator(userId))
                    });
  };
};

export const putProfilePhotoThunkCreator = (photoURL: any) => {
  return (dispatch: Dispatch<DispatchUsersActionType>) => {
    profileAPI.putProfilePhoto(photoURL)
                    .then(data => {
                        // dispatch(setUserProfileAC(data));
                        console.log(data);
                    });
  };
};