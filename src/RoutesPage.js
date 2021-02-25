import React, { Component } from 'react'
import { getAllRoutes } from './api-utils.js';
import { Link } from 'react-router-dom';
import './App.css';

export default class RoutesPage extends Component {
    state = {
        routes: [],
    }

    componentDidMount = async () => {
 
        const routes = await getAllRoutes();

        this.setState({ 
            routes: routes,
        })
    }

    render() {

        return (
            <div className="list">    
                { this.state.routes.map(route => 
                    <div className="route" key={route.name}>
                    <Link to={`/routes/${route.id}`}>
                        <p>Route Name: {route.route_name}</p>
                    </Link>
                    <p>Route location ID: {route.location_id}</p>
                    <p>Route Rating: {route.route_rating}</p>
                    <p>{route.is_toprope 
                        ? 'has Top Rope Acces' 
                        : 'no Top Rope Access'}</p>
                </div>
                
                    )}
            </div>
        )
    }
}