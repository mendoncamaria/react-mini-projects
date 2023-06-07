import { FaRegClock, FaTh, FaThList, FaUserAlt } from 'react-icons/fa';
import { TiWeatherCloudy } from 'react-icons/ti';
export const menuItems = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: <FaTh />,
  },
  {
    path: '/about',
    name: 'About',
    icon: <FaUserAlt />,
  },
  {
    path: '/analogClock',
    name: 'Analog Clock',
    icon: <FaRegClock />,
  },
  {
    path: '/digitalClock',
    name: 'Digital Clock',
    icon: <FaRegClock />,
  },
  {
    path: '/weather',
    name: 'Analytics',
    icon: <TiWeatherCloudy />,
  },
  {
    path: '/products',
    name: 'Products',
    icon: <FaThList />,
  },
];


