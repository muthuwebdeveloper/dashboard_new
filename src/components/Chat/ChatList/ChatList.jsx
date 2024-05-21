import React, { useState } from "react";
import userIcon from "../../../assets/Icons/user-plus.svg";
import logoIcon from "../../../assets/Icons/plus-circle.svg";
import avatarImage from "../../../assets/Icons/9306592.jpg";
import "./ChatList.css";
import { Check } from "@phosphor-icons/react";
import { IoMdArrowBack } from "react-icons/io";
import { CgSearch } from "react-icons/cg";
import { TiTick } from "react-icons/ti";
import { RiAddFill } from "react-icons/ri";
import { MdOutlineMobileFriendly } from "react-icons/md";

const ChatData = [
  {
    username: "Vasanth",
    timestamp: "2:26 PM",
    text: "Hey baby, come online! It's a beautiful day.",
    type: "text",
    unreadCount: 3,
  },
  {
    username: "Varun",
    timestamp: "10:45 AM",
    text: "Good morning! How are you?",
    type: "text",
    unreadCount: 0,
  },
  {
    username: "Mukesh",
    timestamp: "8:30 PM",
    text: "Let's catch up sometime this week.",
    type: "text",
    unreadCount: 1,
  },
  {
    username: "Kaushik",
    timestamp: "4:15 PM",
    text: "Have you finished the project yet?",
    type: "text",
    unreadCount: 2,
  },
  {
    username: "ChandraLekha",
    timestamp: "11:02 AM",
    text: "Did you see the game last night?",
    type: "video",
    unreadCount: 0,
  },
  {
    username: "My Name is Karan Gandhi",
    timestamp: "9:30 AM",
    text: "Happy birthday! 🎉",
    type: "video",
    unreadCount: 0,
  },
  {
    username: "Muthu",
    timestamp: "6:50 PM",
    text: "I'll be late for the meeting tomorrow.",
    type: "doc",
    unreadCount: 3,
  },
  {
    username: "Mukesh",
    timestamp: "8:20 AM",
    text: "How was your weekend?",
    type: "doc",
    unreadCount: 1,
  },
  {
    username: "Hr Akka",
    timestamp: "10:00 PM",
    text: "Are you free for a call later?",
    type: "image",
    unreadCount: 0,
  },
  {
    username: "Rajini",
    timestamp: "3:30 PM",
    text: "Can you send me the presentation slides?",
    type: "image",
    unreadCount: 0,
  },
];

const ChatList = ({ handleName }) => {
  const maxLength = 25;
  const minLength = 15;

  const [consearch, setConSearch] = useState(false);

  const handleSearch = () => {
    setConSearch(!consearch);
  };
  const handlesearchClose = () => {
    setConSearch(!consearch);
  };

  return (
    <div>
      <div className="chatlist">
        <div className="cl-header" style={{ position: "relative" }}>
          <h5>Chat</h5>
          <div className="cl-head">
            <img src={logoIcon} alt="" className="logo" />
            <img
              src={userIcon}
              alt=""
              onClick={handleSearch}
              style={{ cursor: "pointer" }}
            />
          </div>
          {consearch && (
            <div
              className="chat-search-contact"
              style={{
                position: "absolute",
                width: "91%",
                // border: "1px solid #E6E6E6",
                top: "0rem",
                borderRadius: "10px",
                boxShadow:
                  "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px",
              }}
            >
              <div
                className="contact-top d-flex justify-content-between align-items-center"
                style={{
                  borderTopLeftRadius: "8px",
                  borderTopRightRadius: "8px",
                  color: "#fff",
                  padding: "10px",
                }}
              >
                {/* <div className="d-flex justify-content-between align-items-center"> */}
                <IoMdArrowBack
                  style={{ color: "#fff", fontSize: "20px", cursor: "pointer" }}
                  onClick={handlesearchClose}
                />
                {/* <h3
                  style={{ color: "#fff", fontSize: "20px" }}
                  className="mb-0 ms-1"
                >
                  Contact
                </h3> */}
                <input
                  type="text"
                  className="form-control"
                  placeholder="search your contact"
                  style={{ width: "100%", marginLeft: "8px" }}
                />
                {/* </div> */}
                {/* <div className="">
                <button
                  className=""
                  style={{
                    fontSize: "18px",
                    background: "none",
                    border: "none",
                    color: "#fff",
                  }}
                >
                  <CgSearch />
                </button>
              </div> */}
              </div>
              <div
                className="contact-middle"
                style={{
                  // background: "#fff",
                  padding: "10px",
                  maxHeight: "54vh",
                  overflowY: "scroll",
                }}
              >
                <p className="mb-0">contact with kodukku</p>
                <div
                  className="contact-names d-flex justify-content-between align-items-center"
                  style={{ padding: "10px 0px" }}
                >
                  <div className="cn_left d-flex justify-content-between align-items-center">
                    <img
                      src={avatarImage}
                      alt=""
                      style={{ width: "3rem", borderRadius: "50%" }}
                    />
                    <p className="contact-search-title mb-0 ms-2">
                      varun , Kaushik
                    </p>
                  </div>
                  <button
                    style={{
                      fontSize: "20px",
                      background: "none",
                      border: "none",
                    }}
                  >
                    <RiAddFill />
                    {/* <TiTick /> */}
                  </button>
                </div>
                <div
                  className="contact-names d-flex justify-content-between align-items-center "
                  style={{ padding: "10px 0px" }}
                >
                  <div className="cn_left d-flex justify-content-between align-items-center">
                    <img
                      src={avatarImage}
                      alt=""
                      style={{ width: "3rem", borderRadius: "50%" }}
                    />
                    <p className="contact-search-title mb-0 ms-2">
                      varun , Kaushik
                    </p>
                  </div>
                  <button
                    style={{
                      fontSize: "20px",
                      background: "none",
                      border: "none",
                    }}
                  >
                    <MdOutlineMobileFriendly />
                  </button>
                </div>
                <div
                  className="contact-names d-flex justify-content-between align-items-center"
                  style={{ padding: "10px 0px" }}
                >
                  <div className="cn_left d-flex justify-content-between align-items-center">
                    <img
                      src={avatarImage}
                      alt=""
                      style={{ width: "3rem", borderRadius: "50%" }}
                    />
                    <p className="contact-search-title mb-0 ms-2">
                      varun , Kaushik
                    </p>
                  </div>
                  <button
                    style={{
                      fontSize: "20px",
                      background: "none",
                      border: "none",
                    }}
                  >
                    <RiAddFill />
                    {/* <TiTick /> */}
                  </button>
                </div>
                <div
                  className="contact-names d-flex justify-content-between align-items-center "
                  style={{ padding: "10px 0px" }}
                >
                  <div className="cn_left d-flex justify-content-between align-items-center">
                    <img
                      src={avatarImage}
                      alt=""
                      style={{ width: "3rem", borderRadius: "50%" }}
                    />
                    <p className="contact-search-title mb-0 ms-2">
                      varun , Kaushik
                    </p>
                  </div>
                  <button
                    style={{
                      fontSize: "20px",
                      background: "none",
                      border: "none",
                    }}
                  >
                    <MdOutlineMobileFriendly />
                  </button>
                </div>
                <div
                  className="contact-names d-flex justify-content-between align-items-center"
                  style={{ padding: "10px 0px" }}
                >
                  <div className="cn_left d-flex justify-content-between align-items-center">
                    <img
                      src={avatarImage}
                      alt=""
                      style={{ width: "3rem", borderRadius: "50%" }}
                    />
                    <p className="contact-search-title mb-0 ms-2">
                      varun , Kaushik
                    </p>
                  </div>
                  <button
                    style={{
                      fontSize: "20px",
                      background: "none",
                      border: "none",
                    }}
                  >
                    <RiAddFill />
                    {/* <TiTick /> */}
                  </button>
                </div>
                <div
                  className="contact-names d-flex justify-content-between align-items-center "
                  style={{ padding: "10px 0px" }}
                >
                  <div className="cn_left d-flex justify-content-between align-items-center">
                    <img
                      src={avatarImage}
                      alt=""
                      style={{ width: "3rem", borderRadius: "50%" }}
                    />
                    <p className="contact-search-title mb-0 ms-2">
                      varun , Kaushik
                    </p>
                  </div>
                  <button
                    style={{
                      fontSize: "20px",
                      background: "none",
                      border: "none",
                    }}
                  >
                    <MdOutlineMobileFriendly />
                  </button>
                </div>
                <div
                  className="contact-names d-flex justify-content-between align-items-center"
                  style={{ padding: "10px 0px" }}
                >
                  <div className="cn_left d-flex justify-content-between align-items-center">
                    <img
                      src={avatarImage}
                      alt=""
                      style={{ width: "3rem", borderRadius: "50%" }}
                    />
                    <p className="contact-search-title mb-0 ms-2">
                      varun , Kaushik
                    </p>
                  </div>
                  <button
                    style={{
                      fontSize: "20px",
                      background: "none",
                      border: "none",
                    }}
                  >
                    <RiAddFill />
                    {/* <TiTick /> */}
                  </button>
                </div>
                <div
                  className="contact-names d-flex justify-content-between align-items-center "
                  style={{ padding: "10px 0px" }}
                >
                  <div className="cn_left d-flex justify-content-between align-items-center">
                    <img
                      src={avatarImage}
                      alt=""
                      style={{ width: "3rem", borderRadius: "50%" }}
                    />
                    <p className="contact-search-title mb-0 ms-2">
                      varun , Kaushik
                    </p>
                  </div>
                  <button
                    style={{
                      fontSize: "20px",
                      background: "none",
                      border: "none",
                    }}
                  >
                    <MdOutlineMobileFriendly />
                  </button>
                </div>
                <div
                  className="contact-names d-flex justify-content-between align-items-center"
                  style={{ padding: "10px 0px" }}
                >
                  <div className="cn_left d-flex justify-content-between align-items-center">
                    <img
                      src={avatarImage}
                      alt=""
                      style={{ width: "3rem", borderRadius: "50%" }}
                    />
                    <p className="contact-search-title mb-0 ms-2">
                      varun , Kaushik
                    </p>
                  </div>
                  <button
                    style={{
                      fontSize: "20px",
                      background: "none",
                      border: "none",
                    }}
                  >
                    <RiAddFill />
                    {/* <TiTick /> */}
                  </button>
                </div>
                <div
                  className="contact-names d-flex justify-content-between align-items-center "
                  style={{ padding: "10px 0px" }}
                >
                  <div className="cn_left d-flex justify-content-between align-items-center">
                    <img
                      src={avatarImage}
                      alt=""
                      style={{ width: "3rem", borderRadius: "50%" }}
                    />
                    <p className="contact-search-title mb-0 ms-2">
                      varun , Kaushik
                    </p>
                  </div>
                  <button
                    style={{
                      fontSize: "20px",
                      background: "none",
                      border: "none",
                    }}
                  >
                    <MdOutlineMobileFriendly />
                  </button>
                </div>
                <div
                  className="contact-names d-flex justify-content-between align-items-center"
                  style={{ padding: "10px 0px" }}
                >
                  <div className="cn_left d-flex justify-content-between align-items-center">
                    <img
                      src={avatarImage}
                      alt=""
                      style={{ width: "3rem", borderRadius: "50%" }}
                    />
                    <p className="contact-search-title mb-0 ms-2">
                      varun , Kaushik
                    </p>
                  </div>
                  <button
                    style={{
                      fontSize: "20px",
                      background: "none",
                      border: "none",
                    }}
                  >
                    <RiAddFill />
                    {/* <TiTick /> */}
                  </button>
                </div>
                <div
                  className="contact-names d-flex justify-content-between align-items-center "
                  style={{ padding: "10px 0px" }}
                >
                  <div className="cn_left d-flex justify-content-between align-items-center">
                    <img
                      src={avatarImage}
                      alt=""
                      style={{ width: "3rem", borderRadius: "50%" }}
                    />
                    <p className="contact-search-title mb-0 ms-2">
                      varun , Kaushik
                    </p>
                  </div>
                  <button
                    style={{
                      fontSize: "20px",
                      background: "none",
                      border: "none",
                    }}
                  >
                    <MdOutlineMobileFriendly />
                  </button>
                </div>
                <div
                  className="contact-names d-flex justify-content-between align-items-center"
                  style={{ padding: "10px 0px" }}
                >
                  <div className="cn_left d-flex justify-content-between align-items-center">
                    <img
                      src={avatarImage}
                      alt=""
                      style={{ width: "3rem", borderRadius: "50%" }}
                    />
                    <p className="contact-search-title mb-0 ms-2">
                      varun , Kaushik
                    </p>
                  </div>
                  <button
                    style={{
                      fontSize: "20px",
                      background: "none",
                      border: "none",
                    }}
                  >
                    <RiAddFill />
                    {/* <TiTick /> */}
                  </button>
                </div>
                <div
                  className="contact-names d-flex justify-content-between align-items-center "
                  style={{ padding: "10px 0px" }}
                >
                  <div className="cn_left d-flex justify-content-between align-items-center">
                    <img
                      src={avatarImage}
                      alt=""
                      style={{ width: "3rem", borderRadius: "50%" }}
                    />
                    <p className="contact-search-title mb-0 ms-2">
                      varun , Kaushik
                    </p>
                  </div>
                  <button
                    style={{
                      fontSize: "20px",
                      background: "none",
                      border: "none",
                    }}
                  >
                    <MdOutlineMobileFriendly />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="cl-search">
          <input
            type="text"
            id="search"
            placeholder="search"
            className="form-control"
          />
        </div>
        <div className="cl-list">
          {ChatData.map((chat, index) => (
            <div
              className="cl-card"
              key={index}
              onClick={() => handleName(chat.username)}
            >
              <img src={avatarImage} alt="" className="cl-img" />
              <div className="cl-text">
                <div className="cl-title">
                  <h6>
                    {chat.username.length > minLength
                      ? chat.username.substring(0, minLength - 3) + "..."
                      : chat.username}
                  </h6>
                  <p>{chat.timestamp}</p>
                </div>
                <div className="cl-para">
                  <h6>
                    {chat.text.length > maxLength
                      ? chat.text.substring(0, maxLength - 3) + "..."
                      : chat.text}
                  </h6>
                  {/* <h6>
                    <HiOutlineDocumentReport className="mr-1" />
                    Document
                  </h6> */}
                  {/* <h6>
                    <CiVideoOn className="mr-1" />
                    Video
                  </h6> */}
                  {/* <h6>
                    <FaImage className="mr-1" />
                    Image
                  </h6> */}
                  {chat.unreadCount === 0 ? (
                    <Check size={14} />
                  ) : (
                    <p>{chat.unreadCount}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatList;
