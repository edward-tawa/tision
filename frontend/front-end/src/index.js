import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './pages/auth/components/Login';
import Signin from './pages/auth/components/Signin';
import MakePost from './pages/main/components/MakePost';
import Post from './pages/main/components/Post';
import { Friends } from './pages/friends/components/Friends';
import Test from './pages/TopRibbon/components/Test';
import ProtectedRoute from './ProtectedRoute';

const router = createBrowserRouter([
  {
    
    path: "/home",
    element: <ProtectedRoute>
                <App />,
              </ProtectedRoute>
  },
  {
    
    path: "/",
    element: <ProtectedRoute>
                <App />,
              </ProtectedRoute>
  },

  {
    path: "/login",
    element: <Login />
  },

  {
    path: "/signin",
    element: <Signin />
  },

  {
    path: "/makepost",
    element: <MakePost />
  },

  {
    path: "/friends",
    element: <Friends />
  },

  {
    path: "/testt",
    element: <Post />
  },

])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);


