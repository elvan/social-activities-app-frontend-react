import { createBrowserRouter, Navigate } from 'react-router';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import ActivityDetailPage from '../../features/activities/details/ActivityDetailPage';
import ActivityForm from '../../features/activities/form/ActivityForm';
import Counter from '../../features/counter/Counter';
import NotFound from '../../features/errors/NotFound';
import ServerError from '../../features/errors/ServerError';
import TestErrors from '../../features/errors/TestErrors';
import HomePage from '../../features/home/HomePage';
import App from '../layout/App';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <HomePage /> },
      { path: 'activities', element: <ActivityDashboard /> },
      { path: 'activities/:id', element: <ActivityDetailPage /> },
      { path: 'createActivity', element: <ActivityForm key="create" /> },
      { path: 'manage/:id', element: <ActivityForm /> },
      { path: 'counter', element: <Counter /> },
      { path: 'errors', element: <TestErrors /> },
      { path: 'not-found', element: <NotFound /> },
      { path: 'server-error', element: <ServerError /> },
      { path: '*', element: <Navigate replace to="/not-found" /> },
    ],
  },
]);
