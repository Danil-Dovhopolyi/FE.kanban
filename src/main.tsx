import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import App from './App';
import { authRoutes } from './auth/auth.router';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  authRoutes,
]);

const root = document.getElementById('root');

ReactDOM.createRoot(root!).render(<RouterProvider router={router} />);
