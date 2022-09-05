import React from "react";
import { FaUsers } from "react-icons/fa";
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

