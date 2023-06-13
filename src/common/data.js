import { FaRegClock, FaTh, FaUserAlt } from 'react-icons/fa';
import { TiWeatherCloudy } from 'react-icons/ti';
import { BsCurrencyExchange } from "react-icons/bs";
import { RiTodoFill } from "react-icons/ri";
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
    path: '/stopwatch',
    name: 'Stopwatch',
    icon: <FaRegClock />,
  },
  {
    path: '/weather',
    name: 'Weather',
    icon: <TiWeatherCloudy />,
  },
  {
    path: '/products',
    name: 'Currency Converter',
    icon: <BsCurrencyExchange />,
  },
  {
    path: '/todo-list',
    name: 'Todo List',
    icon: <RiTodoFill />,
  },
];


