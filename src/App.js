import React, {Component } from 'react';
import './App.css'
import Navbar from './components/Navbar';
import News from './components/News';
import { GoArrowUp } from "react-icons/go";

export default class App extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.scrolled);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrolled);
  }

  scrolled = () => {
    const mybutton = document.getElementById("gotop");
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  
  moveTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  render() {
    return (
      <div>
        <Navbar/>
        <div className='btn btn-primary fs-3 fw-bold' onClick={this.moveTop} id='gotop' title="Go to top" ><GoArrowUp /></div>
        <News/>
      </div>
    );
  }
}
