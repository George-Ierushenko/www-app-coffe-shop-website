import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Navigation from './components/Navigation';
import Footer from './components/Footer';

import HomePage from './pages/Home';
import GalleryPage from './pages/Gallery';

function App() {
  return (
    <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          {/* <Route path="/" exact component={Home} />
          <Route path="/gallery" component={Gallery} /> */}
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
