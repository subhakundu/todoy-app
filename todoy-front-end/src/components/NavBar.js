import NavBarMenuItems from './NavBarMenuItems';
import M from "materialize-css";
import { useEffect } from 'react';

import { Link } from "react-router-dom";

const NavBar = () => {
    useEffect(() => {
        var elems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elems);
    }, [])
    return (
        <>
            <nav>
                <div className="nav-wrapper">
                    <a href="#!" className="brand-logo">Logo</a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger">
                        <i className="material-icons">
                            menu
                        </i>
                    </a>
                    <ul className="right hide-on-med-and-down">
                        <NavBarMenuItems />
                    </ul>
                </div>
            </nav>
            <ul className="sidenav" id="mobile-demo">
                <NavBarMenuItems />
            </ul>
        </>
    );   
}

export default NavBar;