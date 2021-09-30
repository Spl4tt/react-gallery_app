//import logo from './logo.svg';
import './App.css';
import config from "./config";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Search from "./components/Search";
import MainNav from "./components/MainNav";
import PhotoContainer from "./components/PhotoContainer";
import Home from "./components/Home";
import GaggiPage from "./components/GaggiPage";
import {Component} from "react";

const apiKey = config;

console.log(apiKey);

class App extends Component {

    handleSearch = (searchString) => {
        this.setState({
            searchString: searchString
        });

        this.search(searchString);
    }

    search = (searchString) => {
        const searchPath = '/search/'+searchString;
        console.log('searchPath: ' + searchPath);

        //this.props.history.push(searchPath); // redirect
    }

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Search
                        handleSearch={this.handleSearch}
                    />
                    <MainNav />
                    <Route exact path="/" component={Home}/>
                    <Route path="/gaggi" component={GaggiPage}/>
                    <Route path="/search/:topic" component={PhotoContainer}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
