import React, { useState } from "react";
import "./ChatSidebar.css";
import avatar from "../../../assets/Icons/busi-Avatar.svg";
import cars from "../../../assets/Icons/car1.jpg";
import chatData from "../../Chat/ChatSection/ChatArea/ChatBox/Chat";
import logo from "../../../assets/Icons/plus-circle.svg";
import {
  ArrowLeft,
  BellRinging,
  Camera,
  File,
  FileText,
  Image,
  Images,
  Link,
  MoonStars,
  VideoCamera,
} from "@phosphor-icons/react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import "video-react/dist/video-react.css";
import { Player } from "video-react";
import ReactPlayer from "react-player";
import Lottie from "react-lottie";
import animationData from "../../../assets/loader.json";

const ChatSidebar = ({ handleCollapse, userName, themeChange }) => {
  const handleClose = () => {
    handleCollapse();
  };

  const [activeButton, setActiveButton] = useState("1");

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  const [isPlaying, setIsPlaying] = useState(false);
  const videoUrl =
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
  const thumbnailUrl =
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"; // Thumbnail URL

  const handlePlayButtonClick = () => {
    setIsPlaying(true);
  };

  const data = [
    {
      id: 1,
      date: "today",
      image:
        "https://imgd.aeplcdn.com/370x208/n/cw/ec/141867/nexon-exterior-right-front-three-quarter-71.jpeg?isig=0&q=80",
    },
    {
      id: 2,
      date: "yesterday",
      image:
        "https://imgd.aeplcdn.com/370x208/n/cw/ec/141867/nexon-exterior-right-front-three-quarter-71.jpeg?isig=0&q=80",
    },
    {
      id: 3,
      date: "2024-10-24",
      image:
        "https://imgd.aeplcdn.com/370x208/n/cw/ec/141867/nexon-exterior-right-front-three-quarter-71.jpeg?isig=0&q=80",
    },
    {
      id: 4,
      date: "today",
      image:
        "https://imgd.aeplcdn.com/370x208/n/cw/ec/141867/nexon-exterior-right-front-three-quarter-71.jpeg?isig=0&q=80",
    },
    {
      id: 5,
      date: "yesterday",
      image:
        "https://imgd.aeplcdn.com/370x208/n/cw/ec/141867/nexon-exterior-right-front-three-quarter-71.jpeg?isig=0&q=80",
    },
    {
      id: 6,
      date: "2024-10-24",
      image:
        "https://imgd.aeplcdn.com/370x208/n/cw/ec/141867/nexon-exterior-right-front-three-quarter-71.jpeg?isig=0&q=80",
    },
    {
      id: 7,
      date: "today",
      image:
        "https://imgd.aeplcdn.com/370x208/n/cw/ec/141867/nexon-exterior-right-front-three-quarter-71.jpeg?isig=0&q=80",
    },
    {
      id: 8,
      date: "yesterday",
      image:
        "https://imgd.aeplcdn.com/370x208/n/cw/ec/141867/nexon-exterior-right-front-three-quarter-71.jpeg?isig=0&q=80",
    },
    {
      id: 9,
      date: "2024-10-24",
      image:
        "https://imgd.aeplcdn.com/370x208/n/cw/ec/141867/nexon-exterior-right-front-three-quarter-71.jpeg?isig=0&q=80",
    },
    {
      id: 10,
      date: "today",
      image:
        "https://imgd.aeplcdn.com/370x208/n/cw/ec/141867/nexon-exterior-right-front-three-quarter-71.jpeg?isig=0&q=80",
    },
  ];

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const groupMessagesByDate = (messages) => {
    const groupedMessages = [];
    const uniqueDates = new Set();

    messages.forEach((el) => {
      const messageDate = el.date;

      if (!uniqueDates.has(messageDate)) {
        groupedMessages.push({ type: "divider", date: messageDate });
        uniqueDates.add(messageDate);
      }

      groupedMessages.push(el);
    });

    return groupedMessages;
  };

  // Group messages by date
  const groupedChathistory = groupMessagesByDate(data);

  // image upload

  const [imageSrc, setImageSrc] = useState(avatar);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      setImageSrc(event.target.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const [activeTab, setActiveTab] = useState("media");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="chat-sidebar">
      <div className="side-head">
        <ArrowLeft className="btn-arrow" onClick={handleClose} />
        <h6>Profile</h6>
      </div>
      <div className="side-content">
        <div className="side-profile">
          <div className="side-pro-img">
            <img src={imageSrc} alt="" className="img-fluid" />
            {/* <label htmlFor="image-upload" className="btn-side-cam">
              <Camera />
            </label>
            <input
              id="image-upload"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: "none" }}
            /> */}
          </div>
          <p className="side-pro-text">{userName}</p>
        </div>
        <div className="side-btns">
          <div
            className={activeTab === "mute" ? "side-btn active" : "side-btn"}
            onClick={() => handleTabClick("mute")}
          >
            <BellRinging className="side-btn-icon" />
            <p>Mute</p>
          </div>
          <div
            className={activeTab === "media" ? "side-btn active" : "side-btn"}
            onClick={() => handleTabClick("media")}
          >
            <Images className="side-btn-icon" />
            <p>Media</p>
          </div>
          <div
            className={activeTab === "themes" ? "side-btn active" : "side-btn"}
            onClick={() => handleTabClick("themes")}
          >
            <MoonStars className="side-btn-icon" />
            <p>Themes</p>
          </div>
        </div>
        <div className="content">
          {/* {activeTab === "mute" && (
            <div id="muteContent" className="tab-content active">
            ftj
            </div>
          )} */}
          {activeTab === "media" && (
            <div id="mediaContent" className="tab-content">
              <div className="side-tabs" style={{ width: "100%" }}>
                <nav>
                  <button
                    onClick={() => handleButtonClick("1")}
                    className={activeButton === "1" ? "active" : ""}
                  >
                    <Image size={16} /> Photos
                  </button>
                  <button
                    onClick={() => handleButtonClick("2")}
                    className={activeButton === "2" ? "active" : ""}
                  >
                    <VideoCamera size={16} />
                    Videos
                  </button>
                  <button
                    onClick={() => handleButtonClick("3")}
                    className={activeButton === "3" ? "active" : ""}
                  >
                    <File size={16} />
                    Files
                  </button>
                  <button
                    onClick={() => handleButtonClick("4")}
                    className={activeButton === "4" ? "active" : ""}
                  >
                    <Link size={16} />
                    Links
                  </button>
                </nav>
                <div className="tab-content-side">
                  {activeButton === "1" && (
                    <>
                      <div className="">
                        <Lottie
                          options={defaultOptions}
                          height={200}
                          width={200}
                        />
                      </div>
                      <div>
                        {groupedChathistory.map((item, index) => {
                          if (
                            item.type === "divider" &&
                            (item.date === "today" || item.date === "yesterday")
                          ) {
                            return (
                              <div>
                                <p className=" mt-2 mb-3">
                                  <span
                                    style={{
                                      background: "#EFF5FC",
                                      borderRadius: "8px",
                                      padding: "6px 15px",
                                      textTransform: "capitalize",
                                      color: "#8B8B8B",
                                      fontSize: "0.75rem",
                                    }}
                                  >
                                    {item.date}
                                  </span>
                                </p>
                                <div className="tab-card" key={index}>
                                  {groupedChathistory
                                    .slice(index + 1)
                                    .findIndex(
                                      (i) =>
                                        i.type === "divider" &&
                                        i.date === item.date
                                    ) === -1 &&
                                    data
                                      .filter((d) => d.date === item.date)
                                      .map((d, idx) => (
                                        <div key={idx}>
                                          <img
                                            src={cars}
                                            alt=""
                                            style={{
                                              width: "5rem",
                                              borderRadius: "8px",
                                              height: "5rem",
                                            }}
                                          />
                                        </div>
                                      ))}
                                </div>
                              </div>
                            );
                          }
                          return null;
                        })}
                      </div>
                    </>
                  )}

                  {activeButton === "2" && (
                    <div>
                      <div className="">
                        <Lottie
                          options={defaultOptions}
                          height={200}
                          width={200}
                        />
                      </div>
                      <div
                        style={{
                          position: "relative",
                          width: "100%",
                          paddingBottom: "56.25%",
                          backgroundColor: "#000",
                        }}
                      >
                        <>
                          <img
                            src={thumbnailUrl}
                            alt="Video Thumbnail"
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                          />
                          <button
                            onClick={handlePlayButtonClick}
                            style={{
                              position: "absolute",
                              top: "50%",
                              left: "50%",
                              transform: "translate(-50%, -50%)",
                              backgroundColor: "rgba(0, 0, 0, 0.5)",
                              border: "none",
                              borderRadius: "50%",
                              padding: "10px 15px",
                              cursor: "pointer",
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="white"
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </button>
                        </>
                      </div>
                    </div>
                  )}
                  {activeButton === "3" && (
                    <>
                      <div className="">
                        <Lottie
                          options={defaultOptions}
                          height={200}
                          width={200}
                        />
                      </div>
                      <div>
                        {chatData.map((el) => (
                          <div key={el.id} className="chat-message-side">
                            <p className="mt-3 mb-3">
                              <span className="date-side-ch">Today</span>
                            </p>
                            {el.pdf && (
                              <div className="pdf-chat-side">
                                <FileText
                                  size={40}
                                  className="side-link-color"
                                />
                                <div className="text">
                                  <p className="pdf-name">{el.pdf}</p>
                                  <p className="pdf-size">23kb PDF</p>
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                  {activeButton === "4" && (
                    <>
                      <div className="" style={{ margin: "0 auto" }}>
                        {/* <Lottie
                          options={defaultOptions}
                          height={200}
                          width={200}
                        /> */}
                        <img src={logo} alt="" className="side-logo-img" />
                      </div>
                      <div>
                        {chatData.map((el) => (
                          <div key={el.id} className="chat-message-side">
                            <p className="mt-3 mb-3">
                              <span className="date-side-ch">Today</span>
                            </p>
                            {el.pdf && (
                              <div className="pdf-chat-side">
                                <Link size={40} className="side-link-color" />
                                <div className="text">
                                  <p className="pdf-name">
                                    <a href="https://phosphoricons.com/?q=%22link%22&weight=%22bold%22&size=16">
                                      https://phosphoricons.com/?q=%22link%22&weight=%22bold%22&size=16
                                    </a>
                                  </p>
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
          {activeTab === "themes" && (
            <div id="themesContent" className="tab-content">
              <div className="theme-box" onClick={() => themeChange("pink")}>
                <div class="circlepink"></div>
              </div>
              <div className="theme-box" onClick={() => themeChange("green")}>
                <div class="circlegreen"></div>
              </div>
              <div className="theme-box" onClick={() => themeChange("red")}>
                <div class="circlered"></div>
              </div>
              <div className="theme-box" onClick={() => themeChange("blue")}>
                <div class="circleblue"></div>
              </div>
              <div className="theme-box" onClick={() => themeChange("purple")}>
                <div class="circlepurple"></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatSidebar;
