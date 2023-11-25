import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Routes from './Routes/Routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-8xl mx-auto font-inter'>
    <React.StrictMode>
      <RouterProvider router={Routes} />
    </React.StrictMode>,
  </div>
)
