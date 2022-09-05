import React from "react";
import { FaHistory } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";

export const HRMsidenavbarData = [
  {
    title: "Employees",
    path: "/employee",
    icon: <HiUsers />,
    cName: "nav-text",
  },
  {
    title: "Former Employees",
    path: "/formeremployees",
    icon: <FaHistory />,
    cName: "nav-text",
  },
];

export const adminsidenavbarData = [
  {
    title: "Managers",
    path: "/admindashboard",
    icon: <HiUsers />,
    cName: "nav-text",
  },
  {
    title: "Former Managers",
    path: "/formermanagers",
    icon: <FaHistory />,
    cName: "nav-text",
  },
];
