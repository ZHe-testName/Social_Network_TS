import classes from  './profile.module.css';
import Avatar from '../avatar';
import MyPostsContainer from './my-posts/MyPostsContainer';
import { ProfileUserType } from '../../redux/reducers/profile-reducer';
import Preloader from '../preloader/Preloader';

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
    const {user} = props;
    if (!user) {
      return (
        <Preloader />
      );
    }

    return (
        <main className={classes.profile}>
        <div className={classes.banner}></div>

        <div className={classes.account}>
          <Avatar settings={{className: classes.avatar, imgUrl: user.photos.small}}/>

          <div className={classes.description}>

            <span className={classes.username}>
              {`${user.fullName}`}
            </span>

            <div className="extra-info">
              <div className="birth">
                <span className="date">Date of Birth: </span>
                <span className="user-birth">29 april 1990</span>
              </div>

              <div className="location">
                <span className="city">City: </span>
                <span className="user-city">Vinnitsya</span>
              </div>

              <div className="education">
                <span className="eduq">Education: </span>
                <span className="user-eduq">VNTU IEEAS</span>
              </div>

              <div className="wedsite">
                <span className="web">Web Site: </span>
                <a href="/website" className="user-web">www.ewgenius.com</a>
              </div>
            </div>
          </div>
        </div>

        <MyPostsContainer />
      </main>
    );
};

export default Profile;