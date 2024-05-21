import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";

const Main = () => {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="main">
      <div className="main_left" style={{ width: open ? "220px" : "84px" }}>
        <Sidebar handleMenu={handleMenu} open={open} />
      </div>
      <div className="main_right">
        <Topbar />
        <div className="main_content">
          <div className="container">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
