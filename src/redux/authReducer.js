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
export const setAuthUserDate = (id, email,login) => ({type: SET_USER_DATE, id, email,login})


export default authReducer