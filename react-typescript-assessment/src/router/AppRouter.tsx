import { createHashRouter, RouterProvider } from 'react-router-dom'
import RootLayout from '../layout/RootLayout'
import LoginPage from '../pages/login/LoginPage'
import PublicRoute from './PublicRoute'
import PrivateRoute from './PrivateRoute'
import DashboardLayout from '../layout/dashboard/DashboardLayout'
import DashboardPage from '../pages/dashboard/home/DashboardPage'
import UserListPage from '../pages/dashboard/user-list/UserListPage'
import CreateUserPage from '../pages/dashboard/create-user/CreateUserPage'
import MyProfilePage from '../pages/dashboard/my-profile/MyProfilePage'

const AppRouter = () => {

  const router = createHashRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: (
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          )
        },
        {
          path: '/dashboard',
          element: (
            <PrivateRoute>
              <DashboardLayout />
            </PrivateRoute>
          ),
          children: [
            {
              index: true,
              element: <DashboardPage />
            },
            {
              path: 'user-list',
              element: <UserListPage />
            },
            {
              path: 'create-profile',
              element: <CreateUserPage />
            },
            {
              path: 'my-profile',
              element: <MyProfilePage />
            }
          ]
        }
      ]
    }
  ])
  
  return (
    
    <RouterProvider router={router} />
    
  )
}

export default AppRouter