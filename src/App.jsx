import React, { Suspense } from 'react';
import Sidebar from './components/sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routes } from './common/path';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Sidebar>
          <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
          </Sidebar>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
