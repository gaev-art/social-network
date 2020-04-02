import React from 'react';
import './App.css';
import Header from "./components/Profile";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <Profile/>

        </div>
    );
}

export default App;
//https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg