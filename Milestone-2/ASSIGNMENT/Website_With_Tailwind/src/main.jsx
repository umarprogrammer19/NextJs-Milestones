import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './layout.jsx';
import Features from './pages/features.jsx';
import Product from './pages/product.jsx';
import Clients from './pages/clients.jsx';

const router = createBrowserRouter([{
  path: "/",
  element: <Layout />,
  children: [{
    path: "",
    element: <App />,
  }, {
    path: "features",
    element: <Features />
  }, {
    path: "product",
    element: <Product />
  }, {
    path: "clients",
    element: <Clients />
  }]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
