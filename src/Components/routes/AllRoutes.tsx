import React from 'react'
import { useRoutes } from 'react-router-dom'
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
        }
    ])
  return (
    <div>
      {elements}
    </div>
  )
}

export default AllRoutes
