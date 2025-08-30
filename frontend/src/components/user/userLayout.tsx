import React from "react";
import UserNavbar from "./userNavbar";
import { Outlet } from "react-router-dom";

const UserLayout: React.FC = () => (
  <div>
    <UserNavbar />
    <Outlet />
  </div>
);

export default UserLayout;