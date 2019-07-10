import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

class NavBarComponent extends Component {
    render() {
        return (
            <div className ="container-fluid">
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/users" className="nav-link">Users</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link">Contacts</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">About Us..</a>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}
export default NavBarComponent;