import DashboardLayout from "../layouts/DashboardLayout";
import GeneralLayout from "../layouts/GeneralLayout";
import KashkoolPage from "../pages/Kashkool/KashkoolPage";
import HomePage from "../pages/home/HomePage";
import SingleUser from "../pages/single-user/SingleUser";
import Users from "../pages/users/UsersPage";

const routes = [
  {
    path: '/',
    element: <GeneralLayout/>,
    children: [
      { path: '/', exact: true, element: <HomePage/>},
      { path: '/kashkool', exact: true, element: <KashkoolPage/>}
    ]
  },
  {
    path: '/dashbord',
    element: <DashboardLayout/>,
    children: [
      { path: 'users', exact: true, element: <Users/>},
      { path: 'users/single-user/:user_id', exact: true, element: <SingleUser/>},
    ]
  },
]

export default routes;