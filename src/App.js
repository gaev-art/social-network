import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import {Redirect, Switch, Route, withRouter, BrowserRouter} from 'react-router-dom';
import News from './components/Navbar/News/News';
import Music from './components/Navbar/Music/Music';
import Settings from './components/Navbar/Settings/Settings';
// import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Login from './components/Login/Login';
import {connect, Provider} from 'react-redux';
import {compose} from 'redux';
import {initializeApp} from './redux/appReducer';
import Preloader from './components/common/Preloader/Preloader';
import store from './redux/ReduxStore';
import {WithSuspense} from './Hoc/WithSuspense';
import FriendsContainer from './components/Navbar/Friends/FriendsContainer';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))


class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {

        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Switch>
                        <Route path='/dialogs' render={WithSuspense(DialogsContainer)}/>
                        {/*<Route path='/dialogs' render={() =><DialogsContainer/>}/>*/}
                        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                        <Route exact path='/' render={() =>  <Redirect from="/" to="/profile" />}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/news' render={() => <News/>}/>
                        <Route path='/music' render={() => <Music/>}/>
                        <Route path='/settings' render={() => <Settings/>}/>
                        <Route path='/friends' render={() => <FriendsContainer/>}/>
                        <Route path='/login' render={() => <Login/>}/>
                        <Route path='/*' render={() => <div>404 NOT FOUND</div>}/>
                    </Switch>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})


const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

export const MainApp = () => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}
