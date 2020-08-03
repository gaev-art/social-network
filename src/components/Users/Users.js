import React from 'react';
import Paginator from '../common/Paginator/Paginator';
import User from './User';

const Users = (props) => (
    <div>
        <Paginator
            currentPage={props.currentPage}
            totalUsersCount={props.totalUsersCount}
            pageSize={props.pageSize}
            onPageChanged={props.onPageChanged}/>
        <div>
            {props.users.map(u => {
                    return <User key={u.id}
                                 user={u}
                                 {...props}/>
                }
            )}
        </div>
    </div>
);


export default Users;

