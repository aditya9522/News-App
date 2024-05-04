import React, { Component } from 'react';
import './App.css'
import Navbar from './components/Navbar';
import News from './components/News';
import { GoArrowUp } from "react-icons/go";
import Footer from './components/Footer';
import Loader from './components/Loader';

export default class App extends Component {
  componentDidMount() {
    window.onload = () => {
      let spiner = document.querySelector("#spiner");
      let main = document.querySelector("#load");
      spiner.style.display = 'none';
      main.style.display = 'block';
    }
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

  render() {
    return (
      <div>
        <Navbar />
        <div id="spiner"><Loader/></div>
        <div id="load" style={{display: 'none'}}><News /></div>
        <div className='btn btn-primary fs-3 fw-bold border' onClick={this.moveTop} id='gotop' title="Go to top" ><GoArrowUp /></div>
        <Footer />
      </div>
    );
  }
}
