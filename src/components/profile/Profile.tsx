import classes from  './profile.module.css';
import Avatar from '../avatar';
import MyPostsContainer from './my-posts/MyPostsContainer';
import { ProfileUserType } from '../../redux/reducers/profile-reducer';
import Preloader from '../preloader/Preloader';
import userPhoto from '../../imgs/images.png';
import ProfileStatus from './profile-status/ProfileStatus';

export type MainUserType = {
  name: string,
  surname: string,
  mainUserAvaUrl: string,
};

export type PostsType = {
  text: string,
  likes: number,
  dislikes: number,
  id: string,
};

export type ProfilePageType = {
  user: ProfileUserType,
};


function Profile(props: ProfilePageType) {
  //сделать увеличение избрпжения баннера рофиля
    const {user} = props;

    if (!user) {
      return (
        <Preloader />
      );
    }

    // if (!isAuth) return <Redirect to='/login'/>;

    return (
        <main className={classes.profile}>
        <div className={classes.banner}></div>

        <div className={classes.account}>
          <Avatar settings={{className: classes.avatar, imgUrl: user.photos.small ? 
                                                          user.photos.small : 
                                                          userPhoto}}/>

          <div className={classes.description}>

            <span className={classes.username}>
              {`${user.fullName}`}
            </span>

            <div className={classes.extraInfo}>
              <div className="job">
                <span className="lookinAJob">Looking for a job: </span>
                <span className="res">{user.lookingForAJob ? 'YES' : 'NO'}</span>
              </div>

              <div className="status">
                <span className="city">Status: </span>
                <ProfileStatus/>
              </div>

              {/* <div className="education">
                <span className="eduq">Education: </span>
                <span className="user-eduq">VNTU IEEAS</span>
              </div> */}

              <div className="wedsite">
                <span className="web">Contacts: </span>

                <div className={classes.contactsList}>
                  {Object.entries(user.contacts)
                      .map((el, i) => {
                        return(
                          <a href={el[1] ? el[1] : '#'}
                              key={i}
                              className={el[1] ? classes.linkstyle : classes.disabled}>
                            {el[0]}
                          </a>
                        )
                      })}
                </div>
              </div>
            </div>
          </div>
        </div>

        <MyPostsContainer />
      </main>
    );
};

export default Profile;