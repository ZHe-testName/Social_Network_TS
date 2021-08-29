import classes from './users.module.css';
import userPhoto from '../../imgs/images.png';
import { UserType } from '../../redux/reducers/uders-reducer';
import { NavLink } from 'react-router-dom';
import { usersAPI } from '../../api/dal';

type UsersType = {
    users: Array<UserType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    followingIdArr: Array<number | undefined>,
    changePageHandler: (pageNumber: number) => void,
    setUsers: (userId: number) => void,
    followSwitch: (userId: number) => void;
    isFollowingTriger: (isFetching: boolean, userId: number) => void;
};

function Users (props: UsersType) {
    //Сделать карусель с пагинацией, потому что не влезает
    // const pagesAmount = Math.ceil(props.totalUsersCount / props.pageSize);
    const subscribeSwithClick = (followed: boolean, id: number) => {
        props.isFollowingTriger(true, id);

        usersAPI.userSubscribeSwitch(followed, id)
            .then((resultCode: number) => {
                if (resultCode === 0){
                    props.followSwitch(id);
                    props.isFollowingTriger(false, id);
                };
            });  
    };

    const pages = [];

    for ( let i = 1; i <= 10; i++ ) {
        pages.push(i);
    };

    return (
            <div className={classes.usersBlock}>
                <div className={classes.paginationBlock}>
                    {
                        pages.map(page => <span  
                                            key={page}   
                                            className={`${classes.puginationNumStyle} ${props.currentPage === page 
                                            && classes.currentPage}`}
                                            onClick={() => props.changePageHandler(page)}>{page}</span>)
                    }
                </div>
            <>
                {
                    props.users.map((user: UserType) => (
                    <div 
                        className={classes.userWrap}
                        key={user.id}>
                        <div>
                            <NavLink to={'/profile/' + user.id}>
                                <img 
                                    src={user.photos.small 
                                            ? user.photos.small 
                                            : userPhoto} 
                                    alt="User avatar is here" />
                            </NavLink>

                            
                            <button 
                                disabled={props.followingIdArr.some(id => id === user.id)}
                                className={(!user.followed) ? classes.followBtnStyle : classes.unfollowBtnStyle}
                                onClick={() => subscribeSwithClick(user.followed, user.id)}>
                                {(!user.followed) ? 'follow' : 'unfollow'}
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
        
            {/* <button
                onClick={this.getUsers}>Get Users</button> */}
        </div>
    );
};

export default Users;