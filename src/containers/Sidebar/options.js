import React from "react";
import {
  FaUsers,
  FaPassport,
  FaGlobe,
  FaCity,
  FaIndustry,
  FaPeopleCarry,
  FaBriefcase,
  FaBuilding,
  FaUniversity,
  FaChartBar,
  FaLevelUpAlt,
  FaPrayingHands,
  FaTags,
  FaLock,
  FaSortAmountUp,
  FaNetworkWired,
  FaUserFriends,
  FaAsterisk,
  FaQuestionCircle,
  FaUserTie,
  FaMicrophoneAlt,
  FaPoll,
  FaPaste,
  FaSchool,
  FaAlignLeft,
  FaComment,
  FaAward,
  FaCrown,
  FaPager,
  FaRegClipboard,
  FaWrench,
  FaLayerGroup,
  FaBell,
  FaMousePointer,
  FaBriefcaseMedical,
  FaAllergies,
  FaBlackTie,
  FaSearchLocation,
} from "react-icons/fa";

import {
  RiAdvertisementFill,
  RiSurveyFill,
  RiCoupon4Line,
  RiBankFill,
  RiTreasureMapFill,
  RiDashboard3Line,
  RiProfileFill,
  RiApps2Line,
  RiSettings5Fill,
  RiUserVoiceFill,
  RiProductHuntFill,
  RiTimerFlashFill,
} from "react-icons/ri";
import {
  MdTitle,
  MdLocationOn,
  MdRestorePage,
  MdPermContactCalendar,
  MdWork,
  MdChat,
} from "react-icons/md";
import { HiViewBoards, HiDocument } from "react-icons/hi";
import { CgListTree } from "react-icons/cg";
import { BiArea, BiCurrentLocation } from "react-icons/bi";
import { GrMapLocation } from "react-icons/gr";
import { GiTiedScroll, GiMedicines } from "react-icons/gi";
import { FiScissors } from "react-icons/fi";
import { RiParentFill, RiMoneyDollarBoxFill } from "react-icons/ri";
import { GrServices, GrContactInfo } from "react-icons/gr";
import {
  AiFillContacts,
  AiOutlineFieldTime,
  AiFillBank,
  AiFillAppstore,
} from "react-icons/ai";

import { GiFactory } from "react-icons/gi";

import { getPermissions } from "@iso/config/permissions";

const options = [
  {
    key: "admin",
    label: "sidebar.admin",
    // dynamic permission to make item available or not in ur menu , true or false

    show: true,
    leftIcon: <RiDashboard3Line className="anticon anticon-dashboard" />,
  },


  {
    key: "users",
    label: "Users",
    show: getPermissions("user", "list")&&getPermissions("doctor", "list")&&getPermissions("patient", "list"),
    leftIcon: <FaUsers className="anticon anticon-dashboard" />,
    children: [
      {
        key: "admins",
        label: "admins",
        show: getPermissions("user", "list"),
      },
      {
        key: "Doctors",
        label: "Doctors",
        show: getPermissions("doctor", "list"),
      },
      {
        key: "Patients",
        label: "Patients",
        show: getPermissions("patient", "list"),
      },
    ],
  },
  {
    label: "Locations",
    show:
      getPermissions("country", "list") &&
      getPermissions("city", "list") &&
      getPermissions("area", "list") ,
    leftIcon: <FaSearchLocation className="anticon anticon-dashboard" />,
    children: [
      {
        key: "Countries",
        label: "sidebar.provenances",
        show: getPermissions("country", "list"),
        leftIcon: <FaGlobe className="anticon anticon-dashboard" />,
      },
      {
        key: "Cities",
        label: "sidebar.cites",
        show: getPermissions("city", "list"),
        leftIcon: <FaCity className="anticon anticon-dashboard" />,
      },

      {
        key: "Regions",
        label: "Regions",
        show: getPermissions("area", "list"),
        leftIcon: <BiArea className="anticon anticon-dashboard" />,
      },
      // {
      //   key: "Branches",
      //   label: "Branches",
      //   show: getPermissions("branches", "list"),
      //   leftIcon: <BiArea className="anticon anticon-dashboard" />,
      // },
    ],
  },

  {
    key: "roles",
    label: "roles",
    show: getPermissions("role", "list"),
    leftIcon: <FaPager className="anticon anticon-dashboard" />,
  },

  {
    key: "permissions",
    label: "permissions",
    show: getPermissions("permission", "list"),
    leftIcon: <FaTags className="anticon anticon-dashboard" />,
  },
  {
    key: "Logs",
    label: "Logs",
    show: getPermissions("log", "list"),
    leftIcon: <MdRestorePage className="anticon anticon-dashboard" />,
  },
  {
    key: "ContactTypes",
    label: "Contact Types",
    show: getPermissions("contactTypes", "list"),
    leftIcon: <AiFillContacts className="anticon anticon-dashboard" />,
  },
  {
    key: "ContactUs",
    label: "Contact us",
    show: getPermissions("contacts", "list"),
    leftIcon: <MdPermContactCalendar className="anticon anticon-dashboard" />,
  },
  {
    key: "Products",
    label: "Product Information",
    show: getPermissions("productInformation", "list"),
    leftIcon: <RiProductHuntFill className="anticon anticon-dashboard" />,
  },

  {
    key: "Applications",
    label: "Applications",
    show: getPermissions("applications", "list"),
    leftIcon: <AiFillAppstore className="anticon anticon-dashboard" />,
  },
  {
    key: "RetentionTimes",
    label: "RetentionTimes",
    show: getPermissions("RetentionTimes", "list"),
    leftIcon: <RiTimerFlashFill className="anticon anticon-dashboard" />,
  },
  {
    key: "userRequests",
    label: "userRequests",
    show: getPermissions("userRequests", "list"),
    leftIcon: <RiUserVoiceFill className="anticon anticon-dashboard" />,
  },
  {
    key: "PurposeFinances",
    label: "Finances Purpose",
    show: getPermissions("purposeFinances", "list"),
    leftIcon: <RiMoneyDollarBoxFill className="anticon anticon-dashboard" />,
  },
  {
    key: "Companies",
    label: "companies",
    show: getPermissions("company", "list"),
    leftIcon: <GiFactory className="anticon anticon-dashboard" />,
  },
  {
    key: "Bank",
    label: "Bank",
    show: getPermissions("bank", "list"),
    leftIcon: <AiFillBank className="anticon anticon-dashboard" />,
  },
  {
    key: "Occupations",
    label: "Occupations",
    show: getPermissions("occupation", "list"),
    leftIcon: <MdWork className="anticon anticon-dashboard" />,
  },
  {
    key: "socials",
    label: "socials",
    show: getPermissions("social", "list"),
    leftIcon: <MdChat className="anticon anticon-dashboard" />,
  },
];
export default options;
