import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom';

export default withRouter(class Header extends Component {
    render() {
        return (
        <header>
            
            <NavLink exact activeClassName="selected" to="/">
                Home 
                </NavLink>
            
            <NavLink exact activeClassName="selected" to="/routes">
                    Search 
                </NavLink>
            
            <NavLink exact activeClassName="selected" to="/addroute">
                Add Route
                </NavLink>
        </header>
        )
    }
})