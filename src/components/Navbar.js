import React, { Component } from 'react'

export default class Navbar extends Component {
    // state = {
    //     query: '',
    // }

    componentDidMount() {
        let colors = ['red', 'green', 'blue', 'orange', 'pink', 'yellow', 'cyan', 'purple', 'gray', 'white', ]
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

    // handleInput = (event) => {
    //     let value = event.target.value;
    //     this.setState({query: value})        
    // }

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
                        <a id='magic' className='mb-0 fw-medium fs-5 mx-2 text-decoration-none' href="https://play.google.com/store/search?q=mynewsapp&c=apps&hl=en_IN&gl=US" target="_blank" rel="noopener noreferrer">Get daily news</a>
                        {/* <div className="d-flex">
                            <input className="form-control me-2" type="search" id='query' placeholder="Search" aria-label="Search" onChange={this.handleInput}/>
                            <button className="btn btn-outline-primary" onClick={this.props.send(this.state.query)}>Search</button>
                        </div> */}
                    </div>
                </div>
            </nav>
        )
    }
}
