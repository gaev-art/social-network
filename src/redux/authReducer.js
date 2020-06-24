import {AuthApi, ProfileApi} from "../api/api";

export const SET_USER_DATE = 'SET-SET_USER_DATE';


let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth:false,

}


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATE:
            return {
                ...state,
                id:action.id,
                login: action.login,
                email: action.email,
                isAuth: true
            }
        default:
            return state;
    }
}

// export const setUserDate = (data) => ({type: SET_USER_DATE, data})
export const setAuthUserDate = (id, email,login) => ({
    type: SET_USER_DATE,
    id,
    email,
    login
})

//////////////////////////////////////////////////////////
export const getAuthUserDate = () => {
    return (dispatch) => {
        AuthApi.me()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    dispatch(setAuthUserDate(id, email, login))
                    let userId = response.data.data.id
                    ProfileApi.setUserProfile(userId)
                        .then(res => {
                            //тут можно взять фото пользвотель
                        })
                }
            })
    }
}

export default authReducer