import { createBrowserRouter } from 'react-router-dom';
import RootComponent from './RootComponent';
import Home from '../pages/Home';
import Details from '../pages/Details';
import ErrorBoundary from './ErrorBoundary';
import { getUser } from '../apis/user';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <RootComponent />,
    loader: getUser,
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        path: 'details',
        element: <Details />,
      },
    ],
    errorElement: <ErrorBoundary />,
  },
]);
