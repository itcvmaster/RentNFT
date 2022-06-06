import { RouteObject, useRoutes } from 'react-router-dom';

import {
  Market,
  Collections,
  Admin
} from 'pages';

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Market />,
    children: [],
  },
  {
    path: "/Market",
    element: <Market />,
    children: [],
  },
  {
    path: "/Collections",
    element: <Collections />,
    children: [],
  },
  {
    path: "/Collections/:id",
    element: <Market />,
    children: [],
  },
  {
    path: "/Admin",
    element: <Admin />,
    children: [],
  },
];

const Router: React.FC = () => {
  const routing = useRoutes(routes);
  return (
    <>
      {routing}
    </>
  );
}

export default Router;