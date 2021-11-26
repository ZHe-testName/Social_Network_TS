import { NavLink } from 'react-router-dom';
import classes from './header.module.css';

type PropsType = {
    isAuth: boolean,
    login: string | null,
    logout: () => void,
};

function Header(props: PropsType) {
    return (
    <header className={classes.header}>
        <div className={classes.filter}></div>

        <img src="https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/08/10-Best-Gaming-Team-Logos-and-How-to-Make-Your-Own-CurrentYear-image17.png"  
            alt="Web Site Logo"/>

        <div className={classes.loginBlock}>
            {
                props.isAuth 
                ? 
                <div>
                    <button onClick={props.logout} style={{marginRight: "20px"}}>Logout</button>

                    {props.login}
                </div>
                : 
                <NavLink to={'/login'}>
                    Login
                </NavLink>
            }
        </div>
    </header>);
};

export default Header;