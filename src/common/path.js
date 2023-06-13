import { lazy } from 'react';

const Dashboard = lazy(() => import('../pages/dashboard'));
const About = lazy(() => import('../pages/about'));
const AnalogClock = lazy(() =>
  import('../pages/clocks/analogClock/analogClock')
);
const DigitalClock = lazy(() =>
  import('../pages/clocks/digitalClock/digitalClock')
);
const Stopwatch = lazy(() => import('../pages/clocks/stopwatch/index.jsx'));
const Analytics = lazy(() => import('../pages/Analytics'));
const Products = lazy(() => import('../pages/Products'));

export const routes = [
  { path: '/', element: <Dashboard /> },
  { path: '/index.html', element: <Dashboard /> },
  { path: '/dashboard', element: <Dashboard /> },
  { path: '/about', element: <About /> },
  { path: '/analogClock', element: <AnalogClock /> },
  { path: '/digitalClock', element: <DigitalClock /> },
  { path: '/stopwatch', element: <Stopwatch /> },
  { path: '/weather', element: <Analytics /> },
  { path: '/products', element: <Products /> },
  { path: '/todo-list', element: <Products /> },
];
