import React, { useState } from "react";
import "./ChatArea.css";
import Message from "./ChatBox/Message";
import Loader from "./Loader";
import { X } from "@phosphor-icons/react";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import animationData from "../../../../assets/chatloader.json";
import Lottie from "lottie-react";
import LinearProgress from "@mui/material/LinearProgress";

const ChatArea = ({
  loading,
  handleReply,
  ReplyBtn,
  setReplyBtn,
  ReplyData,
  setReplyData,
}) => {
  const confirm1 = () => {
    confirmDialog({
      message: "Do you want to delete this messahge?",
      header: "Delete Confirmation",
      icon: "pi pi-info-circle",
      defaultFocus: "reject",
      acceptClassName: "p-button-danger",
    });
  };

  return (
    <div className="chatArea">
      {/* {loading ? (
        <Loader
          handleReply={handleReply}
          setReplyBtn={setReplyBtn}
          data={"chat message app"}
        />
      ) : (
        <Message
          handleReply={handleReply}
          setReplyBtn={setReplyBtn}
          data={"chat message app"}
        />
      )} */}

      {/* <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{
          height: "6rem",
          width: "6rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      /> */}

      <div className="d-flex justify-content-center align-items-center mt-2 mb-3">
        <LinearProgress style={{ width: "40%" }} />
      </div>

      <Message
        handleReply={handleReply}
        setReplyBtn={setReplyBtn}
        data={"chat message app"}
        setReplyData={setReplyData}
        ReplyData={ReplyData}
        confirm1={confirm1}
      />

      <ConfirmDialog />

      {/* {ReplyBtn && (
        <div className="reply-msgs">
          <div className="reply-msg-box">
            <div className="">
              <h6>@Varun</h6>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <button>
              <X size={18} />
            </button>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default ChatArea;
