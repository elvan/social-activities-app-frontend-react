import { createBrowserRouter, Navigate } from 'react-router';
import LoginForm from '../../features/account/LoginForm';
import RegisterForm from '../../features/account/RegisterForm';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import ActivityDetailPage from '../../features/activities/details/ActivityDetailPage';
import ActivityForm from '../../features/activities/form/ActivityForm';
import Counter from '../../features/counter/Counter';
import NotFound from '../../features/errors/NotFound';
import ServerError from '../../features/errors/ServerError';
import TestErrors from '../../features/errors/TestErrors';
import HomePage from '../../features/home/HomePage';
import ProfilePage from '../../features/profiles/ProfilePage';
import App from '../layout/App';
import RequireAuth from './RequireAuth';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        element: <RequireAuth />,
        children: [
          { path: 'activities', element: <ActivityDashboard /> },
          { path: 'activities/:id', element: <ActivityDetailPage /> },
          { path: 'createActivity', element: <ActivityForm key="create" /> },
          { path: 'manage/:id', element: <ActivityForm /> },
          { path: 'profiles/:id', element: <ProfilePage /> },
        ],
      },
      { path: '', element: <HomePage /> },
      { path: 'counter', element: <Counter /> },
      { path: 'errors', element: <TestErrors /> },
      { path: 'not-found', element: <NotFound /> },
      { path: 'server-error', element: <ServerError /> },
      { path: 'login', element: <LoginForm /> },
      { path: 'register', element: <RegisterForm /> },
      { path: '*', element: <Navigate replace to="/not-found" /> },
    ],
  },
]);
