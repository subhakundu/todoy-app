import { Link } from "react-router-dom";

const NavBarMenuItems = () => {
    return (
        <>
            <li><Link to="/">Sass</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><a href="collapsible.html">Javascript</a></li>
            <li><a href="mobile.html">Mobile</a></li>
        </>
    );
}

export default NavBarMenuItems;