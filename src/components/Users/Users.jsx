import s from './Users.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { usersAPI } from './../../DAL/api';

const Users = (props) => {
    
    let pages = [];
    let pagesNumber = Math.ceil(props.totalUsersCount / props.pageSize);
    for (let i = 1; i <= pagesNumber; i++) {
        pages.push(i);
    }
let active = {
    fontWeight:'500'

}
    return (
        <div>
            <div className={s.pagechanger}>
                {pages.map((p) => {
                    while (p < 20) {
                        return (
                            <span className={props.currentPage === p && s.choosed}onClick={() => { props.onPageChange(p)}}>{p}</span>
                        );
                    }
                })}
            </div>
            {props.users.map((user) => (
                <div>
                    <NavLink to={'/profile/'+ user.id}>
                        <img src={user.photos.small ||
                             'https://upload.wikimedia.org/wikipedia/commons/8/87/Avatar_poe84it.png'} />        
                    </NavLink>
                    {user.name}
                    <div>
                        {user.followed ? 
                            <button disabled={props.followingInProgress.some(id => id === user.id)}
                            onClick={() => {props.toggleFollowingInProgress(true, user.id);  
                                usersAPI.unfollow(user.id).then(response => {
                                if(response.data.resultCode === 0) {
                                   
                                    props.unfollow(user.id)
                                }
                                props.toggleFollowingInProgress(false, user.id)
                            });
                        }}> unfollow</button>
                         
                            : <button disabled={props.followingInProgress.some(id => id === user.id)}
                                onClick={() => {props.toggleFollowingInProgress(true, user.id); 
                                    usersAPI.follow(user.id).then(response => {
                                    if(response.data.resultCode === 0) {
                                        
                                        props.follow(user.id)
                                    }
                                    props.toggleFollowingInProgress(false, user.id)
                                });
                                    
                                }}>follow</button>  
                        }
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Users;
