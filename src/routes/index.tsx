import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import About from '../pages/About';
import Programs from '../pages/Programs';
import Admissions from '../pages/Admissions';
import Gallery from '../pages/Gallery';
import NewsEvents from '../pages/NewsEvents';
import Contact from '../pages/Contact';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'programs',
        element: <Programs />,
      },
      {
        path: 'admissions',
        element: <Admissions />,
      },
      {
        path: 'gallery',
        element: <Gallery />,
      },
      {
        path: 'news-events',
        element: <NewsEvents />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
]);
