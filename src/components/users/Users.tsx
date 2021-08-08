import classes from './users.module.css';
import React from 'react';
import { UserObjType, UsersPropsType } from '../../redux/reducers/uders-reducer';
import { v1 } from 'uuid';

const Users = (props: any) => {
    if (props.users.length === 0){
            props.setUsers([
                {
                    id: v1(),
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6R5bWe_h3yBz109vOZ9ghU0PWG-JFp0tTfw&usqp=CAU',
                    userName: 'Jony',
                    status: 'Hors-rider',
                    location: {
                        country: 'USA',
                        city: 'Springfield',
                    },
                    followed: true,
                },
                {
                    id: v1(),
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6R5bWe_h3yBz109vOZ9ghU0PWG-JFp0tTfw&usqp=CAU',
                    userName: 'Hitler',
                    status: 'My War is Me',
                    location: {
                        city: 'Berlin',
                        country: 'Germany',
                    },
                    followed: true,
                },
                {
                    id: v1(),
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6R5bWe_h3yBz109vOZ9ghU0PWG-JFp0tTfw&usqp=CAU',
                    userName: 'Vitalik',
                    status: 'I sow your train',
                    location: {
                        country: 'Ukraine',
                        city: 'Zhmerunka',
                    },
                    followed: false,
                },
                {
                    id: v1(),
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6R5bWe_h3yBz109vOZ9ghU0PWG-JFp0tTfw&usqp=CAU',
                    userName: 'Koony Lee',
                    status: 'My heart is buket of the ice',
                    location: {
                        country: 'Japan',
                        city: 'Tokyo',
                    },
                    followed: true,
                },
            ]);
    };

    return <div className={classes.usersBlock}>
        {
            props.users.map((user: any) => (
                <div 
                    className={classes.userWrap}
                    key={user.id}>
                    <div>
                        <img 
                            src={user.avatar} 
                            alt="User photo is here" />
                        
                        <button onClick={() => { props.followSwitch(user.id) }}>
                            {user.followed ? 'FOLLOW' : 'UNFOLLOW'}
                        </button>
                    </div>
                    
                    <div>
                        <div>
                            <span>{user.userName}</span>
                            <span>{user.status}</span>
                        </div>

                        <div>
                            <span>{user.location.country}</span>
                            <span>{user.location.city}</span>
                        </div>
                    </div>
                </div>))
        }
    </div>;
};

export default Users;