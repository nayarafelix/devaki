import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'

import { Home, List, Layout, Gustavo, Nayara, Vinicius, Yuri } from '../pages'

const Router = () => {

  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/frelancers', element: <List /> },
        { path: '/gustavo', element: <Gustavo /> },
        { path: '/nayara', element: <Nayara /> },
        { path: '/vinicius', element: <Vinicius /> },
        { path: '/yuri', element: <Yuri /> },
        { path: '*', element: <Navigate to="/" replace /> },
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export { Router }
