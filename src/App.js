import React, { Component } from 'react'
import './App.css';
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
} from 'react-router-dom';
import RoutesPage from './RoutesPage.js';
import HomePage from './HomePage.js';
import DetailPage from './DetailPage.js';
import CreatePage from './CreatePage.js';
import Header from './Header.js';


export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Header />
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            component={HomePage} 
                        />
                        <Route 
                            path="/routes" 
                            exact
                            component={RoutesPage} 
                        />
                        <Route 
                            path="/routes/:id" 
                            exact
                            component= {DetailPage} 
                        />
                        <Route 
                            path="/addroute" 
                            exact
                            component= {CreatePage} 
                        />
                    </Switch>
                </Router>
                <footer>
                    
                </footer>
            </div>
        )
    }
}