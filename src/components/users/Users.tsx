import classes from './users.module.css';
import userPhoto from '../../imgs/images.png';
import { UserType } from '../../redux/reducers/uders-reducer';

type UsersType = {
    users: Array<UserType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    changePageHandler: (pageNumber: number) => void,
    followSwitch: (userId: number) => void,
};

function Users (props: UsersType) {
    //Сделать карусель с пагинацией, потому что не влезает
    // const pagesAmount = Math.ceil(props.totalUsersCount / props.pageSize);

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
                                            className={`${classes.puginationNumStyle} ${props.currentPage === page && classes.currentPage}`}
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
                            <img 
                                src={user.photos.small 
                                        ? user.photos.small 
                                        : userPhoto} 
                                alt="User avatar is here" />
                            
                            <button 
                                className={user.followed ? classes.followBtnStyle : classes.unfollowBtnStyle}
                                onClick={() => { props.followSwitch(user.id) }}>
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
        
            {/* <button
                onClick={this.getUsers}>Get Users</button> */}
        </div>
    );
};

export default Users;