import React from "react";
import { FaHistory, FaTable } from "react-icons/fa";
import {
  MdSupervisorAccount,
  MdOutlineAddToHomeScreen,
  MdPendingActions,
  MdOutlineTopic,
} from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import {
  HiDocumentText,
  HiPresentationChartBar,
  HiTemplate,
  HiUsers,
  HiDocumentSearch,
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
];

export const HRMsidenavbarData = [
  {
    title: "Pending Packages",
    path: "/viewgroups",
    icon: <MdPendingActions />,
    cName: "nav-text",
  },
];
