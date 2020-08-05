import React from 'react';
import s from './Users.module.css'
import ava from '../../img/men.png'
import {NavLink} from 'react-router-dom';

const User = (props) => {
 return(
    <div style={{
        'margin': '30px'
    }}>
            <span>
                <div>
                    <NavLink to={`/profile/${props.user.id}`}>
                    <img src={props.user.photos.small != null ? props.user.photos.small : ava} className={s.img}/>
                    </NavLink>
                </div>
                <div >
                    {props.user.followed
                        ? <button
                            disabled={props.followingInProgress.some(id => id === props.user.id)}
                            onClick={() => {
                                props.unFollow(props.user.id)
                            }}>
                            UnFollow
                        </button>
                        : <button
                            disabled={props.followingInProgress.some(id => id === props.user.id)}
                            onClick={() => {
                                props.follow(props.user.id)
                            }}>
                            Follow
                        </button>
                    }
                </div>
            </span>
    <span>
                <span>
                    <div>
                     Name : {props.user.name}
                    </div>
                    <div>
                     Status : {props.user.status ||"No status"}
                    </div>
                     <div>
                     UserId : {props.user.id}
                    </div>
                </span>
                <span>
                   {/*<div>*/}
                   {/*   {'u.location.country'}*/}
                   {/*</div>*/}
                   {/* <div>*/}
                   {/*     {'u.location.city'}*/}
                   {/* </div>*/}
                </span>
            </span>
</div>
 )
}



export default User;

