import './custom_nav_link.module.css';
import {NavLink} from 'react-router-dom';

type LinkType = {
    href: string,
    description?: string | Object,
    className?: string,
};

function CustomNavLink(props: LinkType) {
    const {href, description, className} = props;

    return (<NavLink to={href} className={className}>{description}</NavLink>);
};

export default CustomNavLink;