import classes from './header.module.css';

function Header() {
    return (
    <header className={classes.header}>
        <div className={classes.filter}></div>

        <img src="https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/08/10-Best-Gaming-Team-Logos-and-How-to-Make-Your-Own-CurrentYear-image17.png"  
            alt="Web Site Logo"/>
    </header>);
};

export default Header;