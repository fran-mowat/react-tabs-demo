import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Tabs from './components/Tabs';
import MyModal from './components/Modal';

function App() {
  return (
    <Router>
      <div className="container">
        <nav className='navbar navbar-expand-lg navbar-light bg-light mb-4'>
          <Link className="navbar-brand" to="/">React App</Link>
          <button className='navbar-toggler' type='button' data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls='navbarNav' aria-expanded='false'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link className='nav-link' to='/'>Home</Link>
              </li>

              <li className='nav-item'>
                <Link className='nav-link' to='/about'>About</Link>
              </li>

              <li className='nav-item'>
                <Link className='nav-link' to='/contact'>Contact</Link>
              </li>
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <div className='mt-4'>
          <h3>Tabs Example</h3>
          <Tabs />
        </div>

        <div className='mt-4'>
          <h3>Modal Example</h3>
          <MyModal />
        </div>
      </div>
    </Router>
  );
}

export default App;
