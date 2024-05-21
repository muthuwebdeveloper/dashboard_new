import React, { useEffect, useState } from "react";
import ChatList from "../ChatList/ChatList";
import ChatSection from "../ChatSection/ChatSection";
import DummyChat from "../DummyChat/DummyChat";
import "./Chatmain.css";

const ChatMain = () => {
  const [userName, setUserName] = useState("");
  const [show, setShow] = useState(true);
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState("blue");

  
  const handleName = (name) => {
    setUserName(name);
    setShow(false);
    setLoading(true);
    handleShowArea();
  };

  useEffect(() => {
    setLoading(true);
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  const themeChange = (color) => {
    setTheme(color);
  };

  const [ShowCHat, setShowChat] = useState(false);

  const handleShowArea = () => {
    setShowChat(true);
  };

  return (
    <div className={`chat ${theme}-mode`}>
      <div className="grid">
        <div className="col-12 md:col-3 lg:col-3">
          <ChatList handleName={handleName} />
        </div>
        <div className="col-12 md:col-9 lg:col-9 mob-side d-none d-md-block">
          {show ? (
            <DummyChat />
          ) : (
            <ChatSection
              userName={userName}
              loading={loading}
              setTheme={setTheme}
              themeChange={themeChange}
            />
          )}
        </div>
        {ShowCHat && (
          <div className="hello col-12 md:col-9 lg:col-9 mob-side d-block  d-md-none">
            {show ? (
              <DummyChat />
            ) : (
              <ChatSection
                userName={userName}
                loading={loading}
                setTheme={setTheme}
                themeChange={themeChange}
                handleShowArea={handleShowArea}
                setShowChat={setShowChat}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatMain;
