import React from "react";
import "./Message.css";
import { Image } from "primereact/image";
import car from "../../../../../assets/Icons/car1.jpg";
import {
  ArrowBendUpLeft,
  Copy,
  DotsThreeVertical,
  FileText,
  Trash,
} from "@phosphor-icons/react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { CiImageOn } from "react-icons/ci";

const TextMsg = ({ el, confirm1, setReplyData, handleReply, setReplyBtn }) => {
  return (
    <div className="msg-text">
      <div className="right">
        <div>
          <p className="text">{el.message}</p>
          <p className="chat-time">12.00 Pm</p>
        </div>
      </div>
      <ThreeDot
        confirm1={confirm1}
        handleReply={handleReply}
        setReplyBtn={setReplyBtn}
        setReplyData={setReplyData}
        el={el}
      />
    </div>
  );
};

const Timeline = ({ el, confirm1, ReplyData, setReplyData, handleReply }) => {
  return (
    <div className="text-center">
      <p className="timeline">
        <span>{el.date}</span>
      </p>
    </div>
  );
};

const MediaMsg = ({ el, confirm1, ReplyData, setReplyData, handleReply }) => {
  return (
    <div className="msg-img">
      <div className="right">
        <div>
          {el.img && (
            <Image
              src={el.img}
              alt=""
              className="img-chat"
              width="100%"
              preview
            />
          )}
          {el.message && <p className="chat-text-img">{el.message}</p>}
          <p className="chat-time">12.00 Pm</p>
        </div>
      </div>
      <ThreeDot
        confirm1={confirm1}
        handleReply={handleReply}
        el={el}
        setReplyData={setReplyData}
      />
    </div>
  );
};

const VideoMsg = ({ el, confirm1, ReplyData, setReplyData, handleReply }) => {
  return (
    <div className="msg-vdo">
      <div className="right">
        <div>
          {el.video && <video src={el.video} controls className="chat-vdo" />}
          {el.message && <p className="chat-text-vdo">{el.message}</p>}
          <p className="chat-time">12.00 Pm</p>
        </div>
      </div>
      <ThreeDot
        confirm1={confirm1}
        handleReply={handleReply}
        el={el}
        setReplyData={setReplyData}
      />
    </div>
  );
};

const AudioMsg = ({ el, confirm1, ReplyData, setReplyData, handleReply }) => {
  return (
    <div className="msg-ado">
      {/* <ConfirmDialog /> */}

      <div className="right">
        <div>
          {el.audio && (
            <audio controls loop>
              <source src={el.audio} type="audio/mp3" className="chat-ado" />
            </audio>
          )}
          {el.message && <p className="chat-text-ado">{el.message}</p>}
          <p className="chat-time">12.00 Pm</p>
        </div>
      </div>
      <ThreeDot
        confirm1={confirm1}
        handleReply={handleReply}
        el={el}
        setReplyData={setReplyData}
      />
    </div>
  );
};

const PdfMsg = ({ el, confirm1, ReplyData, setReplyData, handleReply }) => {
  return (
    <div className="msg-pdf">
      <div className="right">
        <div className=" ">
          {el.pdf && (
            <div className="pdf-chat-side">
              <FileText size={40} className="pdf-chat-img" />
              <div className="text">
                <p className="pdf-name">{el.pdf}</p>
                <p className="pdf-size">{el.pdfSize}</p>
              </div>
            </div>
          )}
          {el.message && <p className="chat-text-pdf">{el.message}</p>}
          <p className="chat-time">12.00 Pm</p>
        </div>
      </div>
      <ThreeDot
        confirm1={confirm1}
        handleReply={handleReply}
        el={el}
        setReplyData={setReplyData}
      />
    </div>
  );
};

// const ReplyImg = () => {
//   return (
//     <div className="reply-img">
//       <div className="right">
//         <div
//           className="d-flex justify-content-between"
//           style={{ background: "#fff", padding: "8px", borderRadius: "4px" }}
//         >
//           <div className="right-head">
//             <h6>@mukesh</h6>
//             <div className="d-flex ">
//               <CiImageOn className="reply-icon" />
//               <p>image </p>
//             </div>
//           </div>
//           <div className="img-reply">
//             <img src={car} alt="" className="img-reply-img" />
//           </div>
//         </div>
//         <div className="">
//           <p style={{ fontsize: "0.8rem" }}>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nulla
//             maiores debitis necessitatibus aperiam minima itaque, hic
//             repellendus fugit! Ipsum.
//           </p>
//         </div>
//       </div>
//       <ThreeDot />
//     </div>
//   );
// };

const ReplyImg = () => {
  return (
    <div className="reply-img">
      <div className="right">
        <div
          className="d-flex justify-content-between"
          style={{ background: "#fff", padding: "8px", borderRadius: "4px" }}
        >
          <div className="right-head">
            <h6>@mukesh</h6>
            <div className="d-flex ">
              <CiImageOn className="reply-icon" />
              <p>image </p>
            </div>
          </div>
          <div className="img-reply">
            <img src={car} alt="" className="img-reply-img" />
          </div>
        </div>
        <div className="">
          <p style={{ fontsize: "0.8rem" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nulla
            maiores debitis necessitatibus aperiam minima itaque, hic
            repellendus fugit! Ipsum.
          </p>
        </div>
      </div>
      <ThreeDot />
    </div>
  );
};

const ThreeDot = ({ handleReply, ReplyData, setReplyData, el, confirm1 }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleReplyClose = () => {
    handleClose();
    handleReply();
    setReplyData(el);
  };

  return (
    <div className="msg-three">
      {/* <ConfirmDialog /> */}

      <button
        className="threedots-msg"
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <DotsThreeVertical />
      </button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <Copy size={16} style={{ marginRight: "8px" }} />
          Copy
        </MenuItem>
        <MenuItem onClick={handleReplyClose}>
          <ArrowBendUpLeft
            size={16}
            style={{ marginRight: "8px" }}
            // onClick={() => setReplyBtn(true)}
          />
          Reply
        </MenuItem>
        <MenuItem onClick={confirm1}>
          <Trash size={16} style={{ marginRight: "8px" }} />
          Delete
        </MenuItem>
      </Menu>
    </div>
  );
};

export { TextMsg, Timeline, MediaMsg, VideoMsg, AudioMsg, PdfMsg, ReplyImg };
