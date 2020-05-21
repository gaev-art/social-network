// import profileReducer from "./profileReducer";
// import dialogsReducer from "./dialogsReducer";
// import sideBarReducer from "./sideBarReducer";
//
//
// let store = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: 1, message: 'Hello!', likeCounts: '21'},
//                 {id: 2, message: 'My first message.', likeCounts: '15'},
//                 {id: 3, message: 'Yo', likeCounts: '999'}
//             ],
//             newPostText: ''
//         },
//         dialogsPage: {
//             messages: [
//                 {id: 1, message: 'Hey!'},
//                 {id: 2, message: 'Hello!'}
//             ],
//             dialogs: [
//                 {id: 1, name: 'Kate'},
//                 {id: 2, name: 'Luffy'}
//             ],
//             newMessageBody: ''
//
//         },
//         sideBar: {
//             friends: [
//                 {id: 1, name: 'Kate'},
//                 {id: 2, name: 'Luffy'}
//             ]
//         }
//     },
//     _callSubscriber() {
//         console.log('state changed')
//     },
//     getState() {
//         return this._state;
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer;
//     },
//
//     dispatch(action) {
//
//         this._state.profilePage = profileReducer(this._state.profilePage,action);
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action);
//         this._state.sideBar = sideBarReducer(this._state.sideBar,action);
//
//         this._callSubscriber(this._state);
//
//         // if (action.type === ADD_POST) {
//         //     let newPost = {
//         //         id: 4,
//         //         message: this._state.profilePage.newPostText,
//         //         likeCounts: '0'
//         //     }
//         //     this._state.profilePage.posts.push(newPost);
//         //     this._state.profilePage.newPostText = '';
//         //     this._callSubscriber(this._state);
//         // } else if (action.type === UPDATE_NEW_POST_TEXT) {
//         //     this._state.profilePage.newPostText = action.newText;
//         //     this._callSubscriber(this._state);
//         // } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
//         //     this._state.dialogsPage.newMessageBody = action.body;
//         //     this._callSubscriber(this._state);
//         // } else if (action.type === SEND_MESSAGE) {
//         //     let body = this._state.dialogsPage.newMessageBody;
//         //     this._state.dialogsPage.newMessageBody = '';
//         //     this._state.dialogsPage.messages.push({id: 3, message: body});
//         //     this._callSubscriber(this._state);
//         // }
//     }
// }
//
// export default store;
// window.store = store;