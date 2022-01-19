import s from './Users.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Users = (props) => {
    let pages = [];
    let pagesNumber = Math.ceil(props.totalUsersCount / props.pageSize);
    for (let i = 1; i <= pagesNumber; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div className={s.pagechanger}>
                {pages.map((p) => {
                    while (p < 20) {
                        return (
                            <span onClick={() => { props.onPageChange(p)}}>{p}</span>
                        );
                    }
                })}
            </div>
            {props.users.map((user) => (
                <div>
                    <NavLink to={'/profile/'+ user.id}>
                        <img
                            src={
                                user.photos.small ||
                                'https://upload.wikimedia.org/wikipedia/commons/8/87/Avatar_poe84it.png'
                            }
                        />
                    </NavLink>
                    {user.name}
                    <div>
                        {user.followed ? (
                            <button
                                onClick={() => {
                                    props.unfollow(user.id);
                                }}
                            >
                                unfollow
                            </button>
                        ) : (
                            <button
                                onClick={() => {
                                    props.follow(user.id);
                                }}
                            >
                                follow
                            </button>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Users;
