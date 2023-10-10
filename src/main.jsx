import React from 'react'
import ReactDOM from 'react-dom/client'
import './Styles/index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainRoute from './Routes/MainRoute.jsx'
import Home from './Pages/Home.jsx'
import Services from './Pages/Services.jsx'
import Login from './Pages/Login.jsx'
import Register from './Pages/Register.jsx'
import BookedServices from './Pages/BookedServices.jsx'
import BookmarkedServices from './Pages/BookmarkedServices.jsx'
import ErrorPage from './Pages/ErrorPage'
import PrivateRoute from './Routes/PrivateRoute'
import ServiceDetails from './Pages/ServiceDetails'
import ServicesProvider from './Contexts/ServicesContext'
import { AuthProvider } from './Contexts/AuthContext'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainRoute></MainRoute>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/public/data.json')
      },
      // {
      //   path: '/services',
      //   element: <Services></Services>,
      // },
      {
        path: '/booked-services',
        element: <BookedServices></BookedServices>,
      },
      {
        path: '/bookmarked-services',
        element: <BookmarkedServices></BookmarkedServices>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/:path',
        element: <PrivateRoute></PrivateRoute>,
        children: [
          {
            path: '/:path',
            element: <ServiceDetails></ServiceDetails>,
          }
        ],
      },
      {
        path: '/booked-services',
        element: <PrivateRoute><BookedServices></BookedServices></PrivateRoute>,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={routes}>
        <MainRoute></MainRoute>
      </RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
