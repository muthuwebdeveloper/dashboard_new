import React from "react";
import "./Message.css";

import chatData from "./Chat";
import {
  TextMsg,
  Timeline,
  MediaMsg,
  VideoMsg,
  AudioMsg,
  PdfMsg,
  ReplyImg,
} from "./MessageType";

const Message = ({
  handleReply,
  setReplyBtn,
  ReplyData,
  setReplyData,
  confirm1,
}) => {
  const groupMessagesByDate = (messages) => {
    const groupedMessages = [];
    let currentDate = null;

    messages.forEach((el) => {
      const messageDate = new Date(el.date_added).toDateString();

      if (messageDate !== currentDate) {
        groupedMessages.push({ type: "divider", date: messageDate });
        currentDate = messageDate;
      }

      groupedMessages.push(el);
    });

    return groupedMessages;
  };

  const groupedChathistory = groupMessagesByDate(chatData);

  return (
    <div className="message">
      {groupedChathistory.map((el) => {
        if (el.type === "divider") {
          return (
            <Timeline
              el={el}
              handleReply={handleReply}
              setReplyData={setReplyData}
              ReplyData={ReplyData}
            />
          );
        }

        switch (el.type) {
          case "divider":
            return (
              <Timeline
                el={el}
                handleReply={handleReply}
                setReplyData={setReplyData}
                ReplyData={ReplyData}
              />
            );

          case "msg":
            switch (el.subtype) {
              case "img":
                return (
                  <MediaMsg
                    el={el}
                    confirm1={confirm1}
                    handleReply={handleReply}
                    setReplyData={setReplyData}
                    ReplyData={ReplyData}
                  />
                );

              case "video":
                return (
                  <VideoMsg
                    confirm1={confirm1}
                    el={el}
                    handleReply={handleReply}
                    setReplyData={setReplyData}
                    ReplyData={ReplyData}
                  />
                );

              case "mp3":
                return (
                  <AudioMsg
                    confirm1={confirm1}
                    el={el}
                    handleReply={handleReply}
                    setReplyData={setReplyData}
                    ReplyData={ReplyData}
                  />
                );

              case "pdf":
                return (
                  <PdfMsg
                    confirm1={confirm1}
                    el={el}
                    handleReply={handleReply}
                    setReplyData={setReplyData}
                    ReplyData={ReplyData}
                  />
                );
              case "rpl_img":
                return <ReplyImg />;

              default:
                return (
                  <TextMsg
                    confirm1={confirm1}
                    el={el}
                    handleReply={handleReply}
                    setReplyBtn={setReplyBtn}
                    setReplyData={setReplyData}
                    // data={data}
                  />
                );
            }

          default:
            return <></>;
        }
      })}
    </div>
  );
};

export default Message;
