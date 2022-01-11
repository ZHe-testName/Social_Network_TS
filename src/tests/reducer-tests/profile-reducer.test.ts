import { profileReducer, setUserProfileAC, setStatusAC, incrementPostLikeAC, incrementPostDislikeAC } from './../../redux/reducers/profile-reducer';
import React from 'react';
import {v1} from 'uuid';
import { addPostCreator } from '../../redux/reducers/profile-reducer';
import { stat } from 'fs';

const state = {
    user: {
        aboutMe: '',
        contacts: {
          facebook: null,
          website: null,
          vk: null,
          twitter: null,
          instagram: null,
          youtube: null,
          github: null,
          mainLink: null,
        },
        status: '',
        lookingForAJob: true,
        lookingForAJobDescription: '',
        fullName: '',
        userId: 0,
        photos: {
          small: 'no',
          large: 'no',
        }
    },
    posts: [
      {text: 'Blablabla my post yo!', likes: 21, dislikes: 10, id: 'simple id'},
      {text: 'Another post, yeh!', likes: 51, dislikes: 69, id: v1()},
      {text: 'What a hell, what is the butifful post?', likes: 121, dislikes: 0, id: v1()},
      {text: 'Stupid post', likes: 21, dislikes: 1110, id: v1()},
      {text: 'Best ever post', likes: 2121, dislikes: 110, id: v1()},
    ],
};

const userObj = {
    aboutMe: 'blabla',
    contacts: {
      facebook: '-',
      website: '-',
      vk: '-',
      twitter: '-',
      instagram: '-',
      youtube: '-',
      github: '-',
      mainLink: '-',
    },
    status: 'programmer',
    lookingForAJob: true,
    lookingForAJobDescription: '-',
    fullName: 'Ezhen',
    userId: 1,
    photos: {
      small: 'no',
      large: 'no',
    }
}

test('new post should be added', () => {
    const action = addPostCreator('new test post');

    const newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(6);
    expect(newState.posts[0].text).toBe('new test post');
});

test('user profile should be setted', () => {
    const action = setUserProfileAC(userObj);

    const newState = profileReducer(state, action);

    expect(newState.user).toEqual(userObj);
    expect(newState.user?.fullName).toBe('Ezhen');
});

test('status should be setted', () => {
    const action = setStatusAC('new status');

    const newState = profileReducer(state, action);

    expect(newState.user?.status).toBe('new status');
});

test('corect post like should be incremented', () => {
    const action = incrementPostLikeAC(1, 'simple id');

    const newState = profileReducer(state, action);

    expect(state.posts[0].likes).toBe(21);
    expect(newState.posts[0].likes).toBe(22);
});

test('corect post like should be dicremented', () => {
    const action = incrementPostDislikeAC(1, 'simple id');

    const newState = profileReducer(state, action);

    expect(state.posts[0].dislikes).toBe(10);
    expect(newState.posts[0].dislikes).toBe(11);
});