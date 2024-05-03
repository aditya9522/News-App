import React, { Component } from 'react'

export default class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let colors = ['red', 'green', 'blue', 'orange', 'pink', 'yellow', 'black', 'cyan', 'purple', 'gray', 'white', ]
        let element = document.querySelector('#magic');
        let i = 0
        setInterval(() => {
            if (i > colors.length - 1){
                i = 0
            }
            element.style.color = colors[i];
            i ++
        }, 1000);
    }

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
                        {/* <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" id='query' placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-primary" type='submit'>Search</button>
                        </form> */}
                        <p id='magic' className='mb-1 fw-medium fs-5'>Read News(free)</p>
                    </div>
                </div>
            </nav>
        )
    }
}
