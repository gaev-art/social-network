import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import {Redirect, Route, Switch} from 'react-router-dom';
import News from './components/Navbar/News/News';
import Music from './components/Navbar/Music/Music';
import Settings from './components/Navbar/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Login from './components/Login/Login';
import FriendsContainer from './components/Navbar/Friends/FriendsContainer';


export function App(props) {

    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar newMessagesCount={props.newMessagesCount}/>
            <div className='app-wrapper-content'>
                <Switch>
                    <Route path='/dialogs/:userId?'
                           render={(props) => <DialogsContainer userId={props.match.params.userId}/>}/>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route exact path='/' render={() => <Redirect from="/" to="/profile"/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/friends' render={() => <FriendsContainer/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                </Switch>
            </div>
        </div>
    )
}




