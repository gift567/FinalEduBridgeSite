import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import App from "./App.jsx";
import StudyAbroad from "./Components/study-abroad/StudyAbroad.jsx";
import Services from "./Components/Services/Services.jsx";
import SocialEnterprise from "./Components/social-enterprise/SocialEnterprise.jsx";
import AboutInfo from './Components/About-info/AboutInfo.jsx';

const router = createBrowserRouter([
    { path: 'Edubridge-github', element: <App />},
    { path: '/Edubridge-github/study-abroad', element: <StudyAbroad />},
    { path: '/Edubridge-github/services', element: <Services />},
    { path: '/Edubridge-github/social-enterprise', element: <SocialEnterprise />},
    { path: '/Edubridge-github/About-info', element: <AboutInfo />},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
       <RouterProvider router={router} />
  </StrictMode>,
)
