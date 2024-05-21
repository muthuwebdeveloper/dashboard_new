import React, { useState } from "react";
import avatar from "../../../../assets/Icons/9306592.jpg";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "./ChatHeader.css";
import { DotsThreeVertical } from "@phosphor-icons/react";
import { Dialog } from "primereact/dialog";
import { IoIosArrowBack } from "react-icons/io";

const ChatHeader = ({
  userName,
  handleCollapse,
  collapse,
  handleShowArea,
  setShowChat,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProfileClick = () => {
    handleClose();
    handleCollapse(); 
  };

  const [reportVisible, setReportVisible] = useState(false);
  const [deleteVisible, setDeleteVisible] = useState(false);
  const [blockVisible, setBlockVisible] = useState(false);

  const HandleDelete = () => {
    setDeleteVisible(true);
    handleClose();
  };
  const HandleBlock = () => {
    setBlockVisible(true);
    handleClose();
  };
  const HandleReport = () => {
    setReportVisible(true);
    handleClose();
  };

  const handlesideClose = () => {
    setShowChat(false);
  };

  return (
    <div className="chatheader">
      <div
        className="ch-head"
        style={{ borderTopRightRadius: collapse ? "0px" : "8px" }}
      >
        <div className="side-arrow d-block d-md-none" onClick={handlesideClose}>
          <IoIosArrowBack style={{ color: "#fff", fontSize: "30px" }} />
        </div>
        <img src={avatar} alt="" className="ch-head-img" />
        <div className="ch-title">
          <div className="ch-text" onClick={handleCollapse}>
            <h6>{userName}</h6>
            <p>online</p>
          </div>
          <Button
            style={{
              border: "none",
              padding: "5px 15px",
              fontSize: "12px",
              fontWeight: 600,
              color: "#1877f2",
              margin: "0px 10px",
            }}
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <DotsThreeVertical size={24} color="#fff" />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleProfileClick}>Profile</MenuItem>
            <MenuItem onClick={HandleDelete}>Delete Chat</MenuItem>
            <MenuItem onClick={HandleBlock}>Block</MenuItem>
            <MenuItem onClick={HandleReport}>Report</MenuItem>
          </Menu>
        </div>
      </div>

      <Dialog
        header="Report Confirmation"
        visible={reportVisible}
        style={{ width: "25vw" }}
        breakpoints={{ "960px": "75vw", "641px": "100vw" }}
        onHide={() => setReportVisible(false)}
      >
        <p className="m-0">Are you sure you want to report?</p>
        <div className="flex justify-content-end mt-3">
          <Button
            style={{
              border: "1px solid #1877f2",
              padding: "5px 15px",
              fontSize: "12px",
              fontWeight: 600,
              color: "#1877f2",
              margin: "0px 10px",
            }}
            className="p-button-text"
            onClick={() => setReportVisible(false)}
          >
            Cancel
          </Button>
          <Button
            style={{
              border: "1px solid #1877f2",
              padding: "5px 15px",
              fontSize: "12px",
              fontWeight: 600,
              color: "#1877f2",
              margin: "0px 10px",
            }}
            className="p-button-danger"
            onClick={() => {
              setReportVisible(false);
            }}
          >
            Report
          </Button>
        </div>
      </Dialog>

      <Dialog
        header="Delete Confirmation"
        visible={deleteVisible}
        style={{ width: "25vw" }}
        breakpoints={{ "960px": "75vw", "641px": "100vw" }}
        onHide={() => setDeleteVisible(false)}
      >
        <p className="m-0">Are you sure you want to delete this item?</p>
        <div className="flex justify-content-end mt-3">
          <Button
            style={{
              border: "1px solid #1877f2",
              padding: "5px 15px",
              fontSize: "12px",
              fontWeight: 600,
              color: "#1877f2",
              margin: "0px 10px",
            }}
            className="p-button-text"
            onClick={() => setDeleteVisible(false)}
          >
            Cancel
          </Button>
          <Button
            style={{
              border: "1px solid #1877f2",
              padding: "5px 15px",
              fontSize: "12px",
              fontWeight: 600,
              color: "#1877f2",
              margin: "0px 10px",
            }}
            className="p-button-danger"
            onClick={() => {
              setDeleteVisible(false);
            }}
          >
            Delete
          </Button>
        </div>
      </Dialog>

      <Dialog
        header="Block Confirmation"
        visible={blockVisible}
        style={{ width: "25vw" }}
        breakpoints={{ "960px": "75vw", "641px": "100vw" }}
        onHide={() => setBlockVisible(false)}
      >
        <p className="m-0">Are you sure you want to block this user?</p>
        <div className="flex justify-content-end mt-3">
          <Button
            style={{
              border: "1px solid #1877f2",
              padding: "5px 15px",
              fontSize: "12px",
              fontWeight: 600,
              color: "#1877f2",
              margin: "0px 10px",
            }}
            className="p-button-text"
            onClick={() => setBlockVisible(false)}
          >
            Cancel
          </Button>
          <Button
            style={{
              border: "1px solid #1877f2",
              padding: "5px 15px",
              fontSize: "12px",
              fontWeight: 600,
              color: "#1877f2",
              margin: "0px 10px",
            }}
            className="p-button-danger"
            onClick={() => {
              setBlockVisible(false);
            }}
          >
            Block
          </Button>
        </div>
      </Dialog>
    </div>
  );
};

export default ChatHeader;
