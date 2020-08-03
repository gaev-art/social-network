import React from 'react';
import s from './Users.module.css'
import ava from '../../img/men.png'
import {NavLink} from 'react-router-dom';
import Paginator from '../common/Paginator/Paginator';

function Users(props) {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <Paginator
                currentPage={props.currentPage}
                totalUsersCount={props.totalUsersCount}
                pageSize={props.pageSize}
                onPageChanged={props.onPageChanged}/>
            {props.users.map(u =>
                    <div key={u.id}>
            <span>
                <div>
                    <NavLink to={`/profile/${u.id}`}>
                    <img src={u.photos.small != null ? u.photos.small : ava} className={s.img}/>
                    </NavLink>
                </div>
                <div>
                    {u.followed
                        ? <button
                            disabled={props.followingInProgress.some(id => id === u.id)}
                            onClick={() => {
                                props.unFollow(u.id)
                            }}>
                            UnFollow
                        </button>
                        : <button
                            disabled={props.followingInProgress.some(id => id === u.id)}
                            onClick={() => {
                                props.follow(u.id)
                            }}>
                            Follow
                        </button>
                    }
                </div>
            </span>
                        <span>
                <span>
                    <div>
                      {u.name}
                    </div>
                    <div>
                      {u.statys}
                    </div>
                     <div>
                      {u.id}
                    </div>
                </span>
                <span>
                   <div>
                      {'u.location.country'}
                   </div>
                    <div>
                        {'u.location.city'}
                    </div>
                </span>
            </span>
                    </div>
            )}
        </div>
    )
}


export default Users;

