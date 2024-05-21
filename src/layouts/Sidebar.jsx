import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/plus-circle.svg";
import {
  RiSpeedUpLine,
  RiPieChartLine,
  RiSettings3Line,
  RiArrowDropLeftLine,
  RiArrowDropRightLine,
} from "@remixicon/react";

const routes = [
  {
    path: "/",
    label: "Overview",
    icon: <RiSpeedUpLine className="icon side-icon" />,
    key: "1",
  },
  {
    path: "/salesreport",
    label: "Sales Report",
    icon: <RiPieChartLine className="icon side-icon" />,
    key: "2",
  },
  {
    path: "/another-link",
    label: "Setting",
    icon: <RiSettings3Line className="icon side-icon" />,
    key: "3",
  },
];

const Sidebar = ({ handleMenu, open }) => {
  return (
    <div className="sidebar">
      <div className="side_top">
        <div className="logo_img">
          <img src={logo} alt="Logo" className="logo" />
          <p className={`logo_text ${!open ? "collapsed" : ""}`}>kodukku</p>
        </div>
      </div>
      <div className="side_middle">
        <ul className="sidebar_nav">
          {routes.map((route) => (
            <li
              key={route.key}
              className={`sidebar_item ${!open ? "collapsed" : ""}`}
            >
              <NavLink
                to={route.path}
                className="nav_link"
                activeClassName="active"
              >
                {route.icon}
                <p>{route.label}</p>
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="side_arrow" onClick={handleMenu}>
          {open ? (
            <RiArrowDropLeftLine className="icon side-arrow_icon" />
          ) : (
            <RiArrowDropRightLine className="icon side-arrow_icon" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
