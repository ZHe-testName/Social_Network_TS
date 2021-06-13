import './custom_nav_link.module.css';
import {NavLink} from 'react-router-dom';

import {LinkType} from '../../redux/types';

function CustomNavLink(props: LinkType) {
    const {href, description, className} = props;

    return (<NavLink to={href} className={className}>{description}</NavLink>);
};

export default CustomNavLink;