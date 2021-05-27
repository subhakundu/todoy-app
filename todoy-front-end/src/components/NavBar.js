import NavBarMenuItems from './NavBarMenuItems';

const NavBar = () => {
    return (
        <>
            <nav>
                <div class="nav-wrapper">
                    <a href="#!" className="brand-logo">Logo</a>
                    <a href="#" dataTarget="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul class="right hide-on-med-and-down">
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