import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/NavBar';

function App() {
  return (
    <>
      <div className="container">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<></>} />
          <Route exact path="/" element={<></>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
