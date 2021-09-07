import {NavLink, Redirect, Route} from "react-router-dom";
import PhotoContainer from "./PhotoContainer";

const MainNav = () => (
    <nav className="main-nav">
        <ul>
            <li><NavLink to="/search/cats">Cats</NavLink></li>
            <li><NavLink to="/search/dogs">Dogs</NavLink></li>
            <li><NavLink to="/search/computers">Computers</NavLink></li>
        </ul>

        <Route path={`/search/cats`} render={ () => <PhotoContainer searchString={'cats'}/>}/>
        <Route path={`/search/dogs`} render={ () => <PhotoContainer searchString={'dogs'}/>}/>
        <Route path={`/search/computers`} render={ () => <PhotoContainer searchString={'computers'}/>}/>
    </nav>
)

export default MainNav;