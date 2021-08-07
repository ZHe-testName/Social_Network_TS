import classes from './users.module.css';
import React from 'react';
import { UserObjType, UsersPropsType } from '../../redux/reducers/uders-reducer';
import { v1 } from 'uuid';

const Users = (props: any) => {
    if (props.users.length === 0){
        props.setUsers([
            {
                id: v1(),
                avatar: 'https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png',
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
                avatar: 'https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png',
                userName: 'Hitler',
                status: 'My War is My',
                location: {
                    city: 'Berlin',
                    country: 'Germany',
                },
                followed: true,
            },
            {
                id: v1(),
                avatar: 'https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png',
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
                avatar: 'https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png',
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

    return <div>
        {
            props.users.map((user: any) => <div key={user.id}>
                <span>
                    <div><img 
                            className={classes.userImg}
                            src={user.avatar} 
                            alt="User photo is here" /></div>
                    
                    <div>
                        <button onClick={() => { props.followSwitch(user.id) }}>
                            {user.followed ? 'FOLLOW' : 'UNFOLLOW'}
                        </button>
                    </div>
                </span>
                
                <span>
                    <span>
                        <div>{user.userName}</div>
                        <div>{user.status}</div>
                    </span>

                    <span>
                        <div>{user.location.country}</div>
                        <div>{user.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>;
};

export default Users;