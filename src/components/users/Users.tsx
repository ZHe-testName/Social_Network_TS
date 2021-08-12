import classes from './users.module.css';
import React from 'react';
import axios from 'axios';
import userPhoto from '../../imgs/images.png';
import { StateUserType, UserType } from '../../redux/reducers/uders-reducer';
import { UsersPropsType } from './UsersContainer';

class Users extends React.Component<UsersPropsType, StateUserType>{
    constructor(props: UsersPropsType) {
        super(props)
    }
    getUsers = () => {
        if (this.props.users.length === 0){
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(responce => {
                    this.props.setUsers(responce.data.items.slice(1, 5))
                })
        };
    }

    render () {
        return <div className={classes.usersBlock}>
        <>
            {
            this.props.users.map((user: UserType) => (
                <div 
                    className={classes.userWrap}
                    key={user.id}>
                    <div>
                        <img 
                            src={user.photos.small 
                                    ? user.photos.small 
                                    : userPhoto} 
                            alt="User photo is here" />
                        
                        <button 
                            className={user.followed ? classes.followBtnStyle : classes.unfollowBtnStyle}
                            onClick={() => { this.props.followSwitch(user.id) }}>
                            {user.followed ? 'follow' : 'unfollow'}
                        </button>
                    </div>
                    
                    <div>
                        <div>
                            <h3>{user.name}</h3>
                            <div>{user.status ? user.status : 'No Status'}</div>
                        </div>

                        <div>
                            <span>{"user.location.country"}</span>
                            <span>{"user.location.city"}</span>
                        </div>
                    </div>
                </div>))
            }

        </>
       
        <button
            onClick={this.getUsers}>Get Users</button>
    </div>;
};
};

// const Users = (props: any) => {
//     const getUsers = () => {
//         if (props.users.length === 0){
//             axios.get('https://social-network.samuraijs.com/api/1.0/users')
//                 .then(responce => {
//                     props.setUsers(responce.data.items.slice(1, 5))
//                 });
//         };
//     };

    // if (props.users.length === 0){
    //         props.setUsers([
    //             {
    //                 id: v1(),
    //                 avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6R5bWe_h3yBz109vOZ9ghU0PWG-JFp0tTfw&usqp=CAU',
    //                 userName: 'Jony',
    //                 status: 'Hors-rider',
    //                 location: {
    //                     country: 'USA',
    //                     city: 'Springfield',
    //                 },
    //                 followed: true,
    //             },
  

//     return <div className={classes.usersBlock}>
//         <>
//         {
//             props.users.map((user: any) => (
//                 <div 
//                     className={classes.userWrap}
//                     key={user.id}>
//                     <div>
//                         <img 
//                             src={user.photos.small 
//                                     ? user.photos.small 
//                                     : userPhoto} 
//                             alt="User photo is here" />
                        
//                         <button 
//                             className={user.followed ? classes.followBtnStyle : classes.unfollowBtnStyle}
//                             onClick={() => { props.followSwitch(user.id) }}>
//                             {user.followed ? 'follow' : 'unfollow'}
//                         </button>
//                     </div>
                    
//                     <div>
//                         <div>
//                             <h3>{user.name}</h3>
//                             <div>{user.status ? user.status : 'No Status'}</div>
//                         </div>

//                         <div>
//                             <span>{"user.location.country"}</span>
//                             <span>{"user.location.city"}</span>
//                         </div>
//                     </div>
//                 </div>))
//         }

//         </>
       
//         <button
//             onClick={getUsers}>Get Users</button>
//     </div>;
// };

export default Users;