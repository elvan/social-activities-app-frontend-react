import { createBrowserRouter } from 'react-router';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import ActivityDetail from '../../features/activities/details/ActivityDetail';
import ActivityForm from '../../features/activities/form/ActivityForm';
import HomePage from '../../features/home/HomePage';
import App from '../layout/App';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <HomePage /> },
      { path: 'activities', element: <ActivityDashboard /> },
      { path: 'activities/:id', element: <ActivityDetail /> },
      { path: 'createActivity', element: <ActivityForm key="create" /> },
      { path: 'manage/:id', element: <ActivityForm /> },
    ],
  },
]);
