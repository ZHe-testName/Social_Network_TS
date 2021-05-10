import './custom_nav_link.module.css';
import {NavLink} from 'react-router-dom';

type LinkType = {
    href: string,
    description: string,
};

function CustomNavLink(props: LinkType) {
    const {href, description} = props;

    console.log(props);

    return (
        <li>
           <NavLink to={href}>{description}</NavLink>
        </li>
    );
};

export default CustomNavLink;