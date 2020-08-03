import {AuthApi} from '../api/api';
import {stopSubmit} from 'redux-form';

export const SET_USER_DATE = 'SOCIAL_NETWORK/AUTH/SET-SET_USER_DATE';


let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,

}


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export const setAuthUserDate = (id, email, login, isAuth) => ({
    type: SET_USER_DATE,
    payload: {id, email, login, isAuth}
})


//////////////////////////////////////////////////////////
export const getAuthUserDate = () => async (dispatch) => {
    let response = await AuthApi.me()
            if (response.data.resultCode === 0) {
                let {id, email, login,} = response.data.data
                dispatch(setAuthUserDate(id, email, login, true))
            }
}

export const login = (email, password, rememberMe) =>async (dispatch) => {
    let response = await AuthApi.login(email, password, rememberMe)
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserDate())
            } else {
                let messages = response.data.messages.length > 0 ? response.data.messages[0] : 'some error'
                dispatch(stopSubmit('login', {_error: messages}))
            }
}
export const logout = () =>async (dispatch) => {
    let response = await AuthApi.logout()
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserDate(null, null, null, false))
            }
}

export default authReducer