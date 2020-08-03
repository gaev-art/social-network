const SEND_MESSAGE = "SOCIAL_NETWORK/DIALOGS/SEND_MESSAGE";

let initialState = {
    messages: [
        {id: 1, message: 'Hey!'},
        {id: 2, message: 'Hello!'}
    ],
    dialogs: [
        {id: 1, name: 'Kate'},
        {id: 2, name: 'Luffy'}
    ]

}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [
                    ...state.messages,
                    {id: 3, message: body}
                ]
            };
        default:
            return state
    }
}

export const sendMessage = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})


export default dialogsReducer;