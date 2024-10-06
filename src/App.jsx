import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserList from './UserList';
import UserDetails from './UserDetails';
import './App.css';

/**
 * App component: The main component of the application that manages routes
 */
function App() {
  return (
    <Router>
      <div className="app-container">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/user/:id" element={<UserDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;