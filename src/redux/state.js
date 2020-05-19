const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hello!', likeCounts: '21'},
                {id: 2, message: 'My first message.', likeCounts: '15'},
                {id: 3, message: 'Yo', likeCounts: '999'}
            ],
            newPostText: ''
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'yo'},
                {id: 2, message: 'hello'}
            ],
            dialogs: [
                {id: 1, name: 'Artem'},
                {id: 2, name: 'Kate'},
                {id: 3, name: 'Luffy'}
            ],
            newMessageBody: ''

        },
        sideBar: {
            friends: [
                {id: 1, name: 'Kate'},
                {id: 2, name: 'Luffy'}
            ]
        }
    },
    _callSubscriber() {
        console.log('state changed')
    },
    gerState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 4,
                message: this._state.profilePage.newPostText,
                likeCounts: '0'
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);

        }else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push({id: 3, message: body});
            this._callSubscriber(this._state);

        }

    }

}


export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})


export default store;
window.store = store;