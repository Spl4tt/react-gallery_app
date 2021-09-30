import {NavLink} from "react-router-dom";

const MainNav = () => (

    <nav className="main-nav">
        <ul>
            {/*<li><NavLink exact to="/" activeStyle={{background: 'tomato'}}>Home</NavLink></li>*/}
            <li><NavLink exact to="/" activeStyle={{background: 'tomato'}}>Home</NavLink></li>
            <li><NavLink to="/gaggi">Gaggiiii!!</NavLink></li>
            <li><NavLink to="/search/cats">Cats</NavLink></li>
            <li><NavLink to="/search/dogs">Dogs</NavLink></li>
            <li><NavLink to="/search/computers">Computers</NavLink></li>
        </ul>
    </nav>
)

export default MainNav;