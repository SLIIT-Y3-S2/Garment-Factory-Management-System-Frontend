import React from "react";
import { FaHistory, FaTable } from "react-icons/fa";
import {
  MdOutlineSupervisorAccount,
  MdSupervisorAccount,
  MdOutlineAddToHomeScreen,
  MdPendingActions,
} from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import {
  HiUsers,
} from "react-icons/hi";
import { GiFiles } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb"

export const stockInsidenavbarData = [
  {
    title: "Stocks In",
    path: "/stocksIn",
    icon: <MdOutlineAddToHomeScreen />,
    cName: "nav-text",
  },
  {
    title: "Stocks View",
    path: "/viewStocks",
    icon: <FaTable />,
    cName: "nav-text",
  },
  {
    title: "Stocks Out",
    path: "/subtypes",
    icon: <BiLogOut />,
    cName: "nav-text",
  },
  {
    title: "Pending Packages",
    path: "/viewgroups",
    icon: <MdPendingActions />,
    cName: "nav-text",
  },
];

export const supliersidenavbarData = [
  {
    title: "Suppliers",
    path: "/supplier",
    icon: <HiUsers />,
    cName: "nav-text",
  },
  {
    title: "Former Suppliers",
    path: "/formersupplier",
    icon: <FaHistory />,
    cName: "nav-text",
  },
  {
    title: "Supply",
    path: "/supply",
    icon: <GiFiles />,
    cName: "nav-text",
  },
  
];

export const buyersidenavbarData = [
  {
    title: "Buyers",
    path: "/buyer",
    icon: <MdSupervisorAccount />,
    cName: "nav-text",
  },
  {
    title: "Former Buyers",
    path: "/formerbuyer",
    icon: <MdOutlineSupervisorAccount />,
    cName: "nav-text",
  },
  {
    title: "Pending Deliveries",
    path: "#",
    icon: <MdPendingActions />,
    cName: "nav-text",
  },
  {
    title: "Approved Deliveries",
    path: "#",
    icon: <TbTruckDelivery />,
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
