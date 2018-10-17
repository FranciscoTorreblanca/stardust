import React, { Component } from 'react'
import './App.css'
import Routes from './Routes'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Routes/>
        <Footer/>
      </div>
    )
  }
}

export default App
