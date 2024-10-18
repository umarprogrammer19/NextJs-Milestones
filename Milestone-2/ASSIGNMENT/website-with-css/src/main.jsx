import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx';
import AboutPage from './pages/About.jsx';
import Services from './pages/Services.jsx';
import ReviewsPage from './pages/Reviews.jsx';
import DoctorsPage from './pages/DoctorsPage.jsx';
import NotFound from './pages/NotFound.jsx';

const router = createBrowserRouter([{
  path: "/",
  element: <App />,
  children: [{
    path: "",
    element: <Home />
  }, {
    path: "About",
    element: <AboutPage />
  }, {
    path: "Services",
    element: <Services />
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

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
