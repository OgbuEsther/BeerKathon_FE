import React from 'react'
import { useRoutes } from 'react-router-dom'
import HomeSreeen from '../landingPage/HomeSreeen'

const AllRoutes = () => {
    const elements = useRoutes([
        {
            path : "/",
            element : <HomeSreeen />
        }
    ])
  return (
    <div>
      {elements}
    </div>
  )
}

export default AllRoutes
