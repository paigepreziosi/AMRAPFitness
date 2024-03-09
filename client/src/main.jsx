import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/sketchy/bootstrap.min.css';
// import './index.css';

// Bringing in the pages the router will use to conditionally show the appropriate views
import App from './App';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import Login from './pages/Login';
import Athlete from './pages/Athlete';
import ExercisePage from './pages/ExercisePage';
import Abs from './pages/Abs';
import Arms from './pages/Arms';
import Back from './pages/Back';
import Chest from './pages/Chest';
import Legs from './pages/Legs';
import Shoulders from './pages/Shoulders';

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'Athlete/:id',
        element: <Athlete />,
      },
      {
        path: 'Login',
        element: <Login />,
      },
      {
        path: 'ExercisePage',
        element: <ExercisePage />,
      },
      {
        path: 'Abs',
        element: <Abs />,
      },
      {
        path: 'Arms',
        element: <Arms />,
      },
      {
        path: 'Back',
        element: <Back />,
      },
      {
        path: 'Chest',
        element: <Chest />,
      },
      {
        path: 'Legs',
        element: <Legs />,
      },
      {
        path: 'Shoulders',
        element: <Shoulders />,
      },
    ],
  },
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);