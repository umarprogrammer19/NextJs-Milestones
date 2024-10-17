import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './layout';
import "./App.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Services from './Pages/Services';
import AboutPage from './Pages/About';
import ReviewsPage from './Pages/ReviewsPage';
import DoctorsPage from './Pages/DoctorsPage';

const router = createBrowserRouter([{
  path: "/",
  element: <Layout />,
  children: [{
    path: "",
    element: <Home />
  }, {
    path: "Services",
    element: <Services />
  }, {
    path: "About",
    element: <AboutPage />
  }, {
    path: "Reviews",
    element: <ReviewsPage />
  }, {
    path: "Doctors",
    element: <DoctorsPage />,
  }, {
    path: "*",
    element: <NotFound />
  }]
}])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
