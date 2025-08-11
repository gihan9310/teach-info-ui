import { createBrowserRouter, type RouteObject } from 'react-router-dom';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <h1>Gihan</h1>,
  },
];

const router = createBrowserRouter(routes);

export default router;