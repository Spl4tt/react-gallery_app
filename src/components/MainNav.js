import {NavLink} from "react-router-dom";

const MainNav = () => (
    <nav className="main-nav">
        <ul>
            <li><NavLink to="/search/cats">Cats</NavLink></li>
            <li><NavLink to="/search/dogs">Dogs</NavLink></li>
            <li><NavLink to="/search/computers">Computers</NavLink></li>
        </ul>
    </nav>
)

export default MainNav;