let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hello!', likeCounts: '21'},
            {id: 2, message: 'My first message.', likeCounts: '15'},
            {id: 3, message: 'Yo', likeCounts: '999'}
        ]
    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'yo'},
            {id: 2, message: 'ky-ky'},
            {id: 3, message: 'gaf-gaf'}
        ],
        dialogs: [
            {id: 1, name: 'Artem'},
            {id: 2, name: 'Kate'},
            {id: 3, name: 'Luffy'}
        ]
    },
    sideBar: {
        friends:[
            {id: 1, name: 'Kate'},
            {id: 2, name: 'Luffy'}
        ]
    }
}

export default state;