import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Locations from './pages/Locations';
import 'bootstrap/dist/css/bootstrap.min.css';
import Confirmation from './pages/Confirmation';
import Contact from './pages/Contact';
import Profile from './pages/Profile'; // New Profile Page

function App() {
  return (
    <Router>
      <NavigationBar />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} /> {/* New Profile Page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
