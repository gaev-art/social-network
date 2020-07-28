import {AuthApi} from '../api/api';

export const SET_USER_DATE = 'SET-SET_USER_DATE';


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
export const getAuthUserDate = () => {
    return (dispatch) => {
        AuthApi.me()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login,} = response.data.data
                    dispatch(setAuthUserDate(id, email, login, true))
                    // let userId = response.data.data.id
                    // ProfileApi.setUserProfile(userId)
                    //     .then(res => {
                    //         //тут можно взять фото пользвотель
                    //     })
                }
            })
    }
}

export const login = (email, password, rememberMe) => (dispatch) => {
    AuthApi.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserDate())
            }
        })
}
export const logout = () => (dispatch) => {
    AuthApi.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserDate(null, null, null, false))
            }
        })
}

export default authReducer