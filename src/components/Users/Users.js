import React from 'react';
import {connect} from "react-redux";
import s from './Users.module.css'
import {followAC, setUsersAC, unFollowAC} from "../../redux/usersReducer";


const Users = (props) => {

    if(props.users.length===0) {
        props.setUsers([
                {
                    id: 1,
                    avatar: 'https://avatars0.githubusercontent.com/u/61547416?s=460&u=f397123fa0fb933bd44b225a06a72e3f9ef36e4f&v=4',
                    followed: false,
                    fullName: 'Luffy',
                    statys: 'gaf',
                    location: {
                        city: 'Minsk',
                        country: 'Belarus'
                    }
                },
                {
                    id: 2,
                    avatar: 'https://avatars0.githubusercontent.com/u/61547416?s=460&u=f397123fa0fb933bd44b225a06a72e3f9ef36e4f&v=4',
                    followed: true,
                    fullName: 'Kate',
                    statys: 'ky-ky',
                    location: {
                        city: 'Minsk',
                        country: 'Belarus'
                    }
                }
            ]
        )
    }


    let user = props.users.map(u =>
        <div key={u.id}>
            <span>
                <div>
                    <img src={u.avatar} className={s.img}/>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => {
                            props.unFollow(u.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            props.follow(u.id)
                        }}>Follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>
                      {u.fullName}
                    </div>
                    <div>
                      {u.statys}
                    </div>
                </span>
                <span>
                   <div>
                 {u.location.country}
                    </div>
                    <div>
                      {u.location.city}
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

