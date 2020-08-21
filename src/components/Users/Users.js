import React from 'react';
import Paginator from '../common/Paginator/Paginator';
import User from './User';
import s from './Users.module.css'
import Preloader from '../common/Preloader/Preloader';
import Search from '../common/Search/Search';

const Users = (props) => {
    return (
        <div className={s.main}>
            <h3>Users:</h3>
            <Search searchName={props.searchName}/>
            <Paginator
                nextPortion={props.nextPortion}
                prevPortion={props.prevPortion}
                firstPortion={props.firstPortion}
                portionSize={props.portionSize}
                portionNumber={props.portionNumber}
                currentPage={props.currentPage}
                totalItemsCount={props.totalItemsCount}
                pageSize={props.pageSize}
                onPageChanged={props.onPageChanged}/>
            {props.isFetching ? <Preloader/> :
                <div className={s.users}>
                    {props.users.map(u => {
                            return <User key={u.id}
                                         user={u}
                                         {...props}/>
                        }
                    )}
                </div>}
        </div>
    )
}


export default Users;

