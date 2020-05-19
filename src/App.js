import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import News from "./components/Navbar/News/News";
import Music from "./components/Navbar/Music/Music";
import Settings from "./components/Navbar/Settings/Settings";

class App extends React.Component {
    render() {
        return (

            <div className='app-wrapper'>
                <Header/>
                <Navbar state={this.props.state.sideBar}/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <Dialogs
                        state={this.props.state.dialogsPage}
                        dispatch={this.props.dispatch}/>}/>
                    <Route path='/profile' render={() => <Profile
                        profilePage={this.props.state.profilePage}
                        dispatch={this.props.dispatch}/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
            </div>
        )
    }
}

export default App;