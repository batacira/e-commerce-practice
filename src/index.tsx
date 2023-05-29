import React from 'react';
import './index.css';
import App from './App';
import ReactDOM from "react-dom/client";
// import { createBrowserRouter, RouterProvider, } from "react-router-dom";
// import Home from './components/Home';
// import OurProducts from './components/OurProducts';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/our-products",
//     element: <OurProducts />,
//   },
// ]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App />
  </React.StrictMode>
);


