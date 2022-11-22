import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/NavBar';
import Missions from './Components/Missions';
import Profiles from './Components/Profiles';
import Rockets from './Components/Rockets';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/my-profile" element={<Profiles />} />
      </Routes>
    </div>
  );
}

export default App;
