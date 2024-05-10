import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';
import ProtectedRoute from 'src/routes/components/ProtectedRoute';
import DashboardLayout from 'src/layouts/dashboard';

export const IndexPage = lazy(() => import('src/pages/app'));
export const BlogPage = lazy(() => import('src/pages/blog'));
export const UserPage = lazy(() => import('src/pages/user'));
export const LoginPage = lazy(() => import('src/pages/login'));
export const ProductsPage = lazy(() => import('src/pages/products'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));
export const ProductMain = lazy(() => import('src/pages/productsmain'));


export default function Router() {
  const routes = useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        {
          path: '', element: <ProtectedRoute> <IndexPage /></ProtectedRoute>, index: true
        },
        { path: 'user', element: <ProtectedRoute><UserPage /></ProtectedRoute> },
        { path: 'devices', element: <ProtectedRoute><ProductMain /></ProtectedRoute> },
        { path: 'products', element: <ProtectedRoute><ProductsPage /></ProtectedRoute> },
        { path: 'blog', element: <ProtectedRoute><BlogPage /></ProtectedRoute> },
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}