import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/components/DashboardLayout';
import MainLayout from 'src/components/MainLayout';
import Dashboard from 'src/pages/Dashboard';
import Login from 'src/pages/Login';
import NotFound from 'src/pages/NotFound';
import Register from 'src/pages/Register';
import Discover from 'src/pages/Discover';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'main', element: <Dashboard /> },
      { path: 'discover', element: <Discover /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: '404', element: <NotFound /> },
      { path: '/', element: <Navigate to="/app/main" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
