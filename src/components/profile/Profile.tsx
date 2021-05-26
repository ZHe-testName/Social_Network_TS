import MyPosts from './my-posts';
import classes from  './profile.module.css';
import Avatar from '../avatar';

type PostsType = {
  text: string,
  likes: number,
  dislikes: number,
  id: string,
};

type PropsType = {
  posts: Array<PostsType>,
  addPost: (postText: string | undefined) => void,
};

function Profile(props: PropsType) {
    const {posts, addPost} = props;

    return (
        <main className={classes.profile}>
        <div className={classes.banner}></div>

        <div className={classes.account}>
          <Avatar settings={{className: classes.avatar, imgUrl: 'https://slovnet.ru/wp-content/uploads/2019/01/1-17.jpg'}}/>

          <div className={classes.description}>

            <span className={classes.username}>
              Zheka Khorunzhyi
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
                <a href="#" className="user-web">www.ewgenius.com</a>
              </div>
            </div>
          </div>
        </div>

        <MyPosts posts={posts} addPost={addPost}/>
      </main>
    );
};

export default Profile;