import CustomNavLink from '../../custom-nav-link';
import './dialogs_nav.module.css';

function DialogsNav() {
    return (
        <ul>
            <li>
                {/* <CustomNavLink /> */}
            </li>
            <li>
                <a href="/vasya">Vasya</a>
            </li>
            <li>
                <a href="/prtya">Petya</a>
            </li>
            <li>
                <a href="/masha">Masha</a>
            </li>
            <li>
                <a href="./vitya">Vitya</a>
            </li>
        </ul>
    );
};

export default DialogsNav;