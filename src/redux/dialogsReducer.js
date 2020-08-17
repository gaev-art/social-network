import {dialogsApi} from '../api/api';

const SET_MESSAGE = 'SOCIAL_NETWORK/DIALOGS/SET_MESSAGE';
const GET_DIALOGS = 'SOCIAL_NETWORK/DIALOGS/GET_DIALOGS';
const GET_MESSAGE = 'SOCIAL_NETWORK/DIALOGS/GET_MESSAGE';
const SET_CURRENT_DIALOGS = 'SOCIAL_NETWORK/DIALOGS/SET_CURRENT_DIALOGS';
const PUT_UP_DIALOGS = 'SOCIAL_NETWORK/DIALOGS/PUT_UP_DIALOGS';


let initialState = {
    messages: [],
    dialogs: [],
    currentDialogsId: null

}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DIALOGS:
        case GET_MESSAGE:
        case SET_CURRENT_DIALOGS:
            return {
                ...state,
                ...action.payload
            }
        case SET_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.message]
            }
        case PUT_UP_DIALOGS:
            return {
                ...state, dialogs: [
                    state.dialogs.find(d => d.id === action.userId),
                    ...state.dialogs.filter(d => d.id !== action.userId)]
            }
        default:
            return state
    }
}


//AC
export const setMessageSuccess = (message) => ({
    type: SET_MESSAGE,
    message
})
export const getDialogsSuccess = (dialogs) => ({
    type: GET_DIALOGS,
    payload: {dialogs}
})
export const getMessagesSuccess = (messages) => ({
    type: GET_MESSAGE,
    payload: {messages}
})
export const setCurrentDialogsId = (currentDialogsId) => ({
    type: SET_CURRENT_DIALOGS,
    payload: {currentDialogsId}
})
export const putUpDialog = (userId) => ({
    type: PUT_UP_DIALOGS,
    userId
})


//Thunk
export const getDialogs = () => async (dispatch) => {
    const response = await dialogsApi.getDialogs()
    dispatch(getDialogsSuccess(response))
}
export const getMessages = (userId) => async (dispatch) => {
    let response = await dialogsApi.getMessages(userId)
    dispatch(getMessagesSuccess(response))
}
export const startDialogs = (userId) => async (dispatch, getState) => {
    await dialogsApi.startDialogs(userId)
    const dialogs = getState().dialogsPage.dialogs.find(d => d.id === userId)
    if (dialogs) {
        dispatch(putUpDialog(userId))
    } else {
        dispatch(getDialogs())
    }
}

export const init = (userId) => async (dispatch) => {
    if (!!userId) {
        dispatch(getDialogs())
        dispatch(getMessages(userId))
        dispatch(setCurrentDialogsId(userId))
    } else {
        dispatch(setCurrentDialogsId(null))
        dispatch(getDialogs())
    }
}


export const sendMessage = (userId, body) => async (dispatch) => {
    let response = await dialogsApi.sendMessage(userId, body)
    dispatch(setMessageSuccess(response.data.message))
    dispatch(setCurrentDialogsId(userId))
    dispatch(startDialogs(userId))

}

export default dialogsReducer;