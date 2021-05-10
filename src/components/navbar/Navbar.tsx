import './navbar.module.css';

import CustomNavLink from '../custom-nav-link';

type LinkType = {
  href: string,
  description: string,
};

type NavType = {
  links: Array<LinkType>,
};

function Navbar(props: NavType) {
    const links = props.links.map((linkSettings: LinkType) => {
      return <li key={linkSettings.href} ><CustomNavLink {...linkSettings} /></li>
    });

    return(
      <nav className='nav'>
        <ul>
          {links}
        </ul>
      </nav>
    );
};

export default Navbar;