import React, {Component } from 'react';
import './App.css'
import Navbar from './components/Navbar';
import News from './components/News';
import { GoArrowUp } from "react-icons/go";

export default class App extends Component {
  state = {
    query: ''
  }
  
  componentDidMount() {
    window.addEventListener('scroll', this.scrolled);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrolled);
  }

  scrolled = () => {
    const mybutton = document.getElementById("gotop");
    if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  
  moveTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  handleSearch = (data) => {
    this.state.query = data;
    console.log(this.state.query);
  }

  render() {
    return (
      <div>
        <Navbar onSearch={this.handleSearch} />
        <div className='btn btn-primary fs-3 fw-bold' onClick={this.moveTop} id='gotop' title="Go to top" ><GoArrowUp /></div>
        <News q={this.state.query}/>
      </div>
    );
  }
}
