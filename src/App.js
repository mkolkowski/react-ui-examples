import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink //for active style
} from 'react-router-dom';

import { SimpleCarTable } from "./components/SimpleCarTable"
import { CarTable } from "./components/CarTable"
import { ExtendableCarTable } from './components/ExtendableCarTable';
import { UserTable } from './components/UserTable';
import { OtherControlls } from './components/OtherControlls';
import { About } from "./components/About"

//https://www.nafrontendzie.pl/react-router-wersji-4-wszystko-nowa
//React Router 4
//Access to GET value: this.props.match.params.id
//Redirect:   this.context.history.push('/');
//*Routes should be mapped from collection

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">React Router v4/Prime React - tests</h1>
                </header>
                <Router>
                    <div className="page">
                        <div className="menu">
                            <ul>
                                <li>
                                    <NavLink to="/" activeStyle={{ 'text-decoration': 'underline' }} exact='true'>Table from JSON (simplest)</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/cars-json" activeStyle={{ 'text-decoration': 'underline' }}>Table from JSON (filter/paging/select)</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/ex-cars-json" activeStyle={{ 'text-decoration': 'underline' }}>Table from JSON (extendable)</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/user-table" activeStyle={{ 'text-decoration': 'underline' }}>Table from API (simplest)</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/other-controlls" activeStyle={{ 'text-decoration': 'underline' }}>Other controlls</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about" activeStyle={{ 'text-decoration': 'underline' }}>About page</NavLink>
                                </li>
                            </ul>
                        </div>

                        <div className="page-body">
                            <Route exact path="/" component={SimpleCarTable} />
                            <Route exact path="/cars-json" component={CarTable} />
                            <Route exact path="/ex-cars-json" component={ExtendableCarTable} />
                            <Route exact path="/user-table" component={UserTable} />
                            <Route exact path="/other-controlls" component={OtherControlls} />
                            <Route path="/about" component={About} />
                        </div>
                    </div>
                </Router>
                <div className="footer">
                    Linki:
                    <a href="https://www.primefaces.org/primereact/#/">https://www.primefaces.org/primereact/#/</a>
                </div>
            </div>
        );
    }
}

export default App;
