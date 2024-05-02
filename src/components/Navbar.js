import React, { Component } from 'react'

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ''
        };
    }

    handleSearch = () => {
        const { query } = this.state;
        this.props.onSearch(query);
    };

    handleInputChange = (event) => {
        this.setState({ query: event.target.value });
    };

    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-dark-subtle">
                <div className="container-fluid mx-2">
                    <a className="navbar-brand fw-bold text-primary" href="#">MyNewsApp</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"  href="#">Contact</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" id='query' placeholder="Search" aria-label="Search" onChange={this.handleInputChange} />
                            <button className="btn btn-outline-primary" onClick={this.handleSearch}>Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        )
    }
}
