import React from 'react';
import s from './Users.module.css'
import ava from '../../img/men.png'
import {NavLink} from "react-router-dom";
import {Api} from "../../api/api";

function Users(props) {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span
                        className={props.currentPage
                        === p && s.selectedPage}
                        onClick={() => {
                            props.onPageChanged(p)
                        }}>{p},</span>
                })}

            </div>
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
                        ? <button onClick={() => {
                            Api.followed(u.id)
                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.unFollow(u.id)
                                    }
                                })

                        }}>UnFollow</button>
                        : <button onClick={() => {
                            Api.unFollowed(u.id)
                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.follow(u.id)
                                    }
                                })


                        }}>Follow</button>
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

