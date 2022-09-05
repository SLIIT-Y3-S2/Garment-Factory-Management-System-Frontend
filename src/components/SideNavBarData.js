import React from "react";
import { FaUsers } from "react-icons/fa";
import {
  MdSupervisorAccount,
  MdOutlineSupervisorAccount,
  MdTopic,
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
