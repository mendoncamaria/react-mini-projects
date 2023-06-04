import React from 'react';
import Sidebar from './components/sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import About from './pages/about';
import Analytics from './pages/Analytics';
import Products from './pages/Products';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/clock" element={<Analytics />} />
            <Route path="/weather" element={<Analytics />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </div>
  );
}

export default App;
