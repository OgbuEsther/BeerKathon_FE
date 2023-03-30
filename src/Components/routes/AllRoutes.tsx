import React from "react";
import { useRoutes } from "react-router-dom";
import Dashboard from "../Admin/Dashboard";
import LeaderBoard from "../Admin/LeaderBoard/Dashboard"
import Match from "../Admin/Start/Dashboard"

import SignIn from "../Auth/SignIn";
import SignUp from "../Auth/SignUp";
import HomeSreeen from "../landingPage/HomeSreeen";

const AllRoutes = () => {
  const elements = useRoutes([
    {
      path: "/",
      element: <HomeSreeen />,
    },
    {
      path: "/get-started",
      element: <SignUp />,
    },
    {
      path: "/sign-in",
      element: <SignIn />,
    },
    {
      path: "/admindashboard",
      element: <Dashboard />,
    },
    {
        path : "/leaderboard",
        element : <LeaderBoard/>
    },
    {
        path : "/start-match",
        element : <Match />
    }
    
  ]);
  return <div>{elements}</div>;
};

export default AllRoutes;
