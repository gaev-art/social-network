import React from 'react';
import {connect} from "react-redux";
import s from './Users.module.css'
import {followAC, setUsersAC, unFollowAC} from "../../redux/usersReducer";
import * as axios from 'axios'
import ava from '../../img/men.png'

const Users = (props) => {

    if (props.users.length === 0) {
        // проверка для того, что бы не было зацикливания!!
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                props.setUsers(response.data.items)
            })
    }


    let user = props.users.map(u =>
        <div key={u.id}>
            <span>
                <div>
                    <img src={u.photos.small != null ? u.photos.small : ava} className={s.img}/>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => {
                            props.unFollow(u.id)
                        }}>UnFollow</button>
                        : <button onClick={() => {
                            props.follow(u.id)
                        }}>Follow</button>}
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
    )

    return (
        <div>
            {user}
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);

