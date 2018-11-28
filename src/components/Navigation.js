import React, { Component } from 'react';

class Navigation extends Component {
    render() {
        return (
            <nav className="nav">
                <a className="nav-link active" href="#">
                    { this.props.titulo }
                    <span className="badge badge-pill badge-light ml-2">{this.props.ntask}</span>
                </a>
                <a className="nav-link" href="#">Link</a>
                <a className="nav-link" href="#">Link</a>
                <a className="nav-link disabled" href="#">Disabled</a>
            </nav>
        );
    }
}

export default Navigation;