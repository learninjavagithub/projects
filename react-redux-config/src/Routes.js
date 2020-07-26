import Dashboard from "./Dashboard.js";
import User from "./User.js";

const Routes = [
  {
    path: "/",
    component: Dashboard
  },
  {
    path: "/user",
    component: User
  }
];

export default Routes;
