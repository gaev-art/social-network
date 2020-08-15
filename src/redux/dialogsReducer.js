import {dialogsApi} from '../api/api';

const SEND_MESSAGE = 'SOCIAL_NETWORK/DIALOGS/SEND_MESSAGE';
const GET_DIALOGS = 'SOCIAL_NETWORK/DIALOGS/GET_DIALOGS';
const GET_MESSAGE = 'SOCIAL_NETWORK/DIALOGS/GET_MESSAGE';


let initialState = {
    messages: [],
    dialogs: []

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
            }
        case GET_DIALOGS:
            return {
                ...state,
                dialogs: [...action.dialogs]
            }
            case GET_MESSAGE:
            return {
                ...state,
                messages: [...action.messages]
            }

        default:
            return state
    }
}


export const sendMessageSuccess = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})
export const getDialogsSuccess = (dialogs) => ({type: GET_DIALOGS, dialogs})
export const getMessagesSuccess = (messages) => ({type: GET_MESSAGE, messages})


export const getDialogs = () => async (dispatch) => {
    let response = await dialogsApi.getUsersDialogs()
        dispatch(getDialogsSuccess(response.data))

}
export const getMessages = () => async (dispatch) => {
    let response = await dialogsApi.getUsersMessage(7384)//??????
        dispatch(getMessagesSuccess(response.data.items))

}
export const sendMessage = (body) => async (dispatch) => {

    let response = await dialogsApi.sendUserMessage(7384,body)//????
    if (response.data.resultCode === 0) {
        dispatch(sendMessageSuccess(response.data.data.message.body))

    }
}

export default dialogsReducer;