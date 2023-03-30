import React from 'react'
import { useRoutes } from 'react-router-dom'
import Dashboard from '../admin/dashboard/Dashboard'
import SignUp from '../Auth/SignUp'
import HomeSreeen from '../landingPage/HomeSreeen'

const AllRoutes = () => {
    const elements = useRoutes([
        {
            path : "/",
            element : <HomeSreeen />
        },
        {
            path : "/get-started",
            element : <SignUp />
        },
        {
            path : "/admindashboard",
            element : <Dashboard />
        }
    ])
  return (
    <div>
      {elements}
    </div>
  )
}

export default AllRoutes
