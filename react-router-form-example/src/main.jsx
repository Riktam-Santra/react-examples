import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Login from './Login.jsx'
import Dashboard from './Dashboard.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    action: async (data) => {
      const request = data.request;
      const formData = await request.formData();
      const name = formData.get('name');
      const email = formData.get('email');

      return {
        name: name,
        email: email
      }
    }
  }
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
