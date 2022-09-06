import React from "react";
import { FaHistory } from "react-icons/fa";
import {
  MdSupervisorAccount,
  MdOutlineSupervisorAccount,
  MdPendingActions,
  MdOutlineTopic,
} from "react-icons/md";
import { AiOutlineWechat, AiFillFileAdd } from "react-icons/ai";
import {
  HiDocumentText,
  HiPresentationChartBar,
  HiTemplate,
  HiUsers,
  HiDocumentSearch,
} from "react-icons/hi";
import { GiFiles } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb"

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
    icon: <HiUsers />,
    cName: "nav-text",
  },
  {
    title: "Supply",
    path: "/supply",
    icon: <GiFiles />,
    cName: "nav-text",
  },
  
];
