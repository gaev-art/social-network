import {getAuthUserDate} from './authReducer';
import React from 'react';

export const SET_INITIALIZED = 'SOCIAL_NETWORK/APP/SET_INITIALIZED';


let initialState = {
    initialized: false,

}



const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized:true
            }
        default:
            return state;
    }
}

export const initializedSuccess = () => ({type: SET_INITIALIZED})


export const initializeApp = () =>(dispatch) => {
   let promise= dispatch(getAuthUserDate());
    Promise.all([promise]).then(()=>{
        dispatch(initializedSuccess());
    })
}


export default appReducer