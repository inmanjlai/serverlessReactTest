import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import App from './App';
import { User } from './User';
import { Error } from './Error';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  { path: "/", element: <Error /> },
  { path: "/users", element: <App /> },
  { path: "/users/:id", element: <User />}
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
