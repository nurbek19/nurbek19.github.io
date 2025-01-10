import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import WebApp from '@twa-dev/sdk'
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import './index.css'
import App from './App.jsx'
import CreateAdvertisement from './pages/CreateAdvertisement.jsx';
import OwnerAdvertisementsList from './pages/OwnerAdvertisementsList.jsx';

WebApp.ready();
WebApp.expand();

const router = createBrowserRouter([
  {
    path: "/nurbek19.github.io/",
    element: <App />,
    children: [
      {
        path: "/nurbek19.github.io/",
        element: <CreateAdvertisement />,
      },
      {
        path: "/vite-react-router/my-houses",
        element: <OwnerAdvertisementsList />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
