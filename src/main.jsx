import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import Communication from './pages/Communication.jsx';
import HelpDesk from './pages/HelpDesk.jsx';
import DashBoard from './pages/DashBoard.jsx';
import AMS from './pages/AMS.jsx';
import HRIS from './pages/HRIS.jsx';
import AdminLogs from './pages/AdminLogs.jsx';
import  Settings from './pages/Settings.jsx';
import  Reports from './pages/Reports.jsx';
import Monitoring from './pages/Monitoring.jsx';
import Projects from './pages/Projects.jsx';
import Clients from './pages/Clients.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <DashBoard></DashBoard>,

      },
      {
        path:'/hris',
        element:<HRIS></HRIS>
      },
      {
        path:'/ams',
        element:<AMS></AMS>
      },
      {
        path:'/monitoring',
        element:<Monitoring></Monitoring>
      },
      {
        path:'/projects',
        element:<Projects></Projects>
      }
      ,
       {
        path:'/clients',
        element:<Clients></Clients>
      },
      {
        path:'/communication',
        element:<Communication></Communication>
      },
      {
        path: '/helpdesk',
        element: <HelpDesk></HelpDesk>
      },
      {
        path:'/reports',
        element:<Reports></Reports>
      },
      {
        path:'/adminlogs',
        element:<AdminLogs></AdminLogs>
      },
      {
        path:'/settings',
        element:<Settings></Settings>
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
