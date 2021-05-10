import './custom_nav_link.module.css';
import {NavLink} from 'react-router-dom';

type LinkType = {
    href: string,
    description: string,
};

function CustomNavLink(props: LinkType) {
    const {href, description} = props;

    return (<NavLink to={href}>{description}</NavLink>);
};

export default CustomNavLink;