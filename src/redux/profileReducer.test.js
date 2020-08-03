import profileReducer, {addPost, deletePost} from './profileReducer';
import React from 'react';

it('length of post should be incremented', () => {
    let actions = addPost('item')
    let state = {
        posts: [
            {id: 1, message: 'Hello!', likeCounts: '21'},
            {id: 2, message: 'My first message.', likeCounts: '15'},
            {id: 3, message: 'Yo', likeCounts: '999'}
        ]
    }
    let newState = profileReducer(state, actions)

    expect(newState.posts.length).toBe(4)

});

it(' after deleting length of message should be decrement', () => {
    let actions = deletePost(1)
    let state = {
        posts: [
            {id: 1, message: 'Hello!', likeCounts: '21'},
            {id: 2, message: 'My first message.', likeCounts: '15'},
            {id: 3, message: 'Yo', likeCounts: '999'}
        ]
    }
    let newState = profileReducer(state, actions)

    expect(newState.posts.length).toBe(2)

});


it(` after deleting length of message shouldn't be decrement if id is incorrect`, () => {
    let actions = deletePost(100)
    let state = {
        posts: [
            {id: 1, message: 'Hello!', likeCounts: '21'},
            {id: 2, message: 'My first message.', likeCounts: '15'},
            {id: 3, message: 'Yo', likeCounts: '999'}
        ]
    }
    let newState = profileReducer(state, actions)

    expect(newState.posts.length).toBe(3)

});
