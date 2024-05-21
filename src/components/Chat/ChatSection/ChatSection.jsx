import React, { useState } from "react";
import ChatHeader from "./ChatHeader/ChatHeader";
import ChatFooter from "./ChatFooter/ChatFooter";
import ChatArea from "./ChatArea/ChatArea";
import "./ChatSection.css";
import ChatSidebar from "./ChatSidebar";

const ChatSection = ({
  userName,
  loading,
  setTheme,
  themeChange,
  handleShowArea,
  setShowChat,
}) => {
  const [collapse, setCollapse] = useState(false);

  const handleCollapse = () => {
    setCollapse(!collapse);
  };

  const [ReplyBtn, setReplyBtn] = useState(false);

  const handleReply = () => {
    setReplyBtn(!ReplyBtn);
  };

  const [ReplyData, setReplyData] = useState("");
  // console.log("====================================");
  // console.log("setReplyData", ReplyData);
  // console.log("====================================");
  return (
    <div className="main-chat">
      <div className="chatsection">
        <ChatHeader
          userName={userName}
          collapse={collapse}
          handleCollapse={handleCollapse}
          handleShowArea={handleShowArea}
          setShowChat={setShowChat}
        />
        <ChatArea
          loading={loading}
          handleReply={handleReply}
          setReplyBtn={setReplyBtn}
          ReplyBtn={ReplyBtn}
          setReplyData={setReplyData}
          ReplyData={ReplyData}
        />
        <ChatFooter
          handleReply={handleReply}
          ReplyBtn={ReplyBtn}
          setReplyBtn={setReplyBtn}
          setReplyData={setReplyData}
          ReplyData={ReplyData}
        />
      </div>
      {collapse ? (
        <ChatSidebar
          handleCollapse={handleCollapse}
          userName={userName}
          setTheme={setTheme}
          themeChange={themeChange}
        />
      ) : null}
    </div>
  );
};

export default ChatSection;
