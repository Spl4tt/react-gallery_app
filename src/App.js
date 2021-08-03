import logo from './logo.svg';
import './App.css';
import config from "./config";
import {BrowserRouter, Link, NavLink, Route} from "react-router-dom";
import Search from "./components/Search";
import MainNav from "./components/MainNav";
import PhotoContainer from "./components/PhotoContainer";

const apiKey = config;

console.log(apiKey);

const App = () => (
    <BrowserRouter>
        <div className="App">
            <Search/>
            <MainNav/>
            <PhotoContainer/>
        </div>
    </BrowserRouter>
);

export default App;
