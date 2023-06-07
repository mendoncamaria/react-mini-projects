import React, { Suspense, lazy } from 'react';
import Sidebar from './components/sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Dashboard = lazy(() => import('./pages/dashboard'));
const About = lazy(() => import('./pages/about'));
const AnalogClock = lazy(() =>
  import('./pages/clocks/analogClock/analogClock')
);
const DigitalClock = lazy(() =>
  import('./pages/clocks/digitalClock/digitalClock')
);
const Analytics = lazy(() => import('./pages/Analytics'));
const Products = lazy(() => import('./pages/Products'));

function App() {
  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Sidebar>
            <Routes>
              <Route path="/index.html" element={<Dashboard />} />
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/about" element={<About />} />
              <Route path="/analogClock" element={<AnalogClock />} />
              <Route path="/digitalClock" element={<DigitalClock />} />
              <Route path="/weather" element={<Analytics />} />
              <Route path="/products" element={<Products />} />
            </Routes>
          </Sidebar>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
