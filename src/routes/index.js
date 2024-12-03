// All components mapping with path for internal routes

import { lazy } from "react";

const Dashboard = lazy(() => import("../pages/protected/Dashboard"));
const Welcome = lazy(() => import("../pages/protected/Welcome"));
const Blank = lazy(() => import("../pages/protected/Blank"));
const Charts = lazy(() => import("../pages/protected/Charts"));
// const Leads = lazy(() => import('../pages/protected/Leads'))
const Calendar = lazy(() => import("../pages/protected/Calendar"));
const Team = lazy(() => import("../pages/protected/Team"));
const ProfileSettings = lazy(() => import("../pages/protected/ProfileSettings"));

const routes = [
  {
    path: "/app/dashboard", // the url
    component: Dashboard, // view rendered
  },
  {
    path: "/welcome", // the url
    component: Welcome, // view rendered
  },
  // {
  //   path: '/leads',
  //   component: Leads,
  // },
  {
    path: "/settings-team",
    component: Team,
  },
  {
    path: "/calendar",
    component: Calendar,
  },
  {
    path: "/settings-profile",
    component: ProfileSettings,
  },

  {
    path: "/charts",
    component: Charts,
  },
  {
    path: "/blank",
    component: Blank,
  },
];

export default routes;
