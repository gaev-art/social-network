import React from 'react';
import s from './Dialogs.module.css';
import {BrowserRouter, NavLink, Route} from "react-router-dom";
import Artem from "./Artem/Artem";
import Kate from "./Kate/Kate";
import Luffy from "./Luffy/Luffy";


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {/*<Route path='/artem' component={Artem}/>*/}
                {/*<Route path='/kate' component={Kate}/>*/}
                {/*<Route path='/luffy' component={Luffy}/>*/}
                <Artem/>
                <Kate/>
                <Luffy/>
            </div>
            <div className={s.messages}>
                <div className={s.dialog}>Hi</div>
                <div className={s.dialog}>ky-ky</div>
                <div className={s.dialog}>gav-gav</div>
            </div>
        </div>
    )
};
export default Dialogs;

