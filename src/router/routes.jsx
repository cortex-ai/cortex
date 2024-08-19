import Home from '@/pages/Home/Home';
import Login from '@/pages/Login/Login';
import Dashboard from '@/pages/Dashboard/Dashboard';
import Translate from '@/pages/Translate/Translate';
import Search from '@/pages/Search/Search';
import Coding from '@/pages/Coding/Coding';
import Voice from '@/pages/Voice/Voice';
import OCR from '@/pages/OCR/OCR';

import ProtectedRoute from './ProtectedRoute'; // 该组件需要登录才能访问

const routes = [
  { path: '/', element: <Home /> },
  { path: '/login', element: <Login /> },
  {
    path: '/dashboard',
    element: <ProtectedRoute element={Dashboard} />, // React Router v6 这里不需要使用 JSX 元素
  },
  {
    path: '/translate',
    element: <ProtectedRoute element={Translate} />,
  },
  {
    path: '/search',
    element: <ProtectedRoute element={Search} />,
  },
  {
    path: '/coding',
    element: <ProtectedRoute element={Coding} />,
  },
  {
    path: '/voice',
    element: <ProtectedRoute element={Voice} />,
  },
  {
    path: '/ocr',
    element: <ProtectedRoute element={OCR} />,
  },
];

export default routes;
