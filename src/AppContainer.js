import React, {useEffect} from 'react';
import './App.css';
import {withRouter} from 'react-router-dom';
import {compose} from 'redux';
import Preloader from './components/common/Preloader/Preloader';
import {useDispatch, useSelector} from 'react-redux';
import {initializeApp} from './redux/appReducer';
import {App} from './App';
import {getNewMessages} from './redux/dialogsReducer';
import {WithAuthRedirect} from './Hoc/WithAuthRedirect';


export function AppContainer(props) {
    const dispatch = useDispatch();

    const initialized = useSelector(state => state.app.initialized)
    const newMessagesCount = useSelector(state => state.dialogsPage.newMessagesCount)

    useEffect(() => {
        dispatch(initializeApp())
        setInterval(() => {
            dispatch(getNewMessages())
        }, 10000)


    }, [dispatch])

    if (!initialized) {
        return <Preloader/>
    }

    return <App newMessagesCount={newMessagesCount}/>

}


compose(
    WithAuthRedirect,
    withRouter,
)(AppContainer);


