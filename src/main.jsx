import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from "./App.jsx";
import StudyAbroad from "./Components/study-abroad/StudyAbroad.jsx";

const router = createBrowserRouter([
    { path: 'Edubridge-github', element: <App />},
    { path: '/Edubridge-github/study-abroad', element: <StudyAbroad />},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
       <RouterProvider router={router} />
  </StrictMode>,
)
