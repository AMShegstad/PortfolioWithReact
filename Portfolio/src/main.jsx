import './index.css';
import App from './App.jsx';
// Line 6 brings in the required imports from 'react'router'dom' tp set up the application routing behavior.
import ReactDOM from 'react-dom/client';
// createBrowserRouter "sets the different paths and routes throughout the app".
// RouterProvider "provides the routing BEHAVIOR to the app".
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// Gotta get that bootstrap!
import 'bootstrap/dist/css/bootstrap.min.css';

// Pulling in my custom components
import Error from './pages/Error';
import Contact from './pages/Contact.jsx';
import AboutMe from './pages/AboutMe.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Resume from './pages/Resume.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <AboutMe />
      },
      {
        path: '/Portfolio',
        element: <Portfolio />
      },
      {
        path: '/Resume',
        element: <Resume />
      },
      {
        path: '/Contact',
        element: <Contact />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div style={{ display: 'flex', justifyContent: 'center', margin: 0, padding: 0, width: '100%' }}>
    <RouterProvider router={router}/>
  </div>
)
