import React, { useEffect, useRef, useState } from "react";
import "./ChatFooter.css";
import car from "../../../../assets/Icons/car1.jpg";
import {
  Camera,
  FileArrowUp,
  FileCloud,
  FileText,
  Headphones,
  Image as ImageIcon,
  MapPin,
  Microphone,
  PaperPlaneTilt,
  Paperclip,
  PhoneDisconnect,
  Smiley,
  User,
  VideoCamera,
  X,
} from "@phosphor-icons/react";
import samplevdo from "../../../../assets/Icons/videosamp.mp4";
import { BsFileEarmarkPdf } from "react-icons/bs";
import pdfmsg from "../../../../assets/dummy.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import { Dialog } from "primereact/dialog";
import { FaPlay } from "react-icons/fa6";
import { FaPause } from "react-icons/fa6";
import { ReactMic } from "react-mic";

// Ensure pdfjs worker is initialized
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const ChatFooter = ({ ReplyBtn, setReplyBtn, ReplyData, onHide }) => {
  const [cate, setCate] = useState(false);
  const [VdoSend, setVdoSend] = useState(false);
  const [PdfPages, setPdfPages] = useState(false);
  // const [PdfSend, setPdfSend] = useState(false);

  const handleCate = () => {
    setCate(!cate);
  };

  const HandleBtn = () => {
    setReplyBtn(false);
  };

  let text;
  let icon;
  if (ReplyData.subtype === "img") {
    text = "photo";
    icon = <ImageIcon size={18} color="#8b8b8b" />;
  } else if (ReplyData.subtype === "pdf") {
    text = "Document";
    icon = <FileText size={18} color="#8b8b8b" />;
  } else if (ReplyData.subtype === "video") {
    text = "Video";
    icon = <VideoCamera size={18} color="#8b8b8b" />;
  } else if (ReplyData.subtype === "mp3") {
    text = "Audio";
    icon = <Headphones size={18} color="#8b8b8b" />;
  } else {
    text = ReplyData.message;
    // icon = <Notepad size={18} />;
  }

  // Image
  const [ImgSend, setImgSend] = useState(false);
  const SendImg = () => {
    setImgSend(!ImgSend);
  };

  const HandleBtnImg = () => {
    setImgSend(!ImgSend);
  };

  // video
  const SendVdo = () => {
    setVdoSend(!VdoSend);
  };

  const HandleBtnVdo = () => {
    setVdoSend(!VdoSend);
  };

  //  pdf
  const SendPdf = () => {
    setPdfPages(!PdfPages);
  };
  const HandleBtnPdfs = () => {
    setPdfPages(!PdfPages);
  };

  useEffect(() => {
    const loadPdfPages = async () => {
      const pdfPages = [];
      const pdfDoc = await pdfjs.getDocument(pdfmsg).promise;
      for (let pageNum = 1; pageNum <= pdfDoc.numPages; pageNum++) {
        const page = await pdfDoc.getPage(pageNum);
        const scale = 1.5;
        const viewport = page.getViewport({ scale });
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        await page.render({ canvasContext: context, viewport }).promise;
        pdfPages.push(canvas.toDataURL("image/png"));
      }
      setPdfPages(pdfPages);
    };

    loadPdfPages();
  }, []);

  const [visible, setVisible] = useState(false);
  const [showCamera, setShowCamera] = useState(false); // State variable to control camera visibility
  const videoRef = useRef(null); // Reference to the video element

  const HandleCameraOpen = () => {
    setVisible(true);
    setShowCamera(true);
  };
  const HandleCameraClose = () => {
    setVisible(false);
    setShowCamera(false);
  };

  useEffect(() => {
    if (showCamera) {
      const handleCameraOpen = async () => {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({
            video: true,
          });
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        } catch (error) {
          console.error("Error accessing camera:", error);
        }
      };

      handleCameraOpen();
    } else {
      const video = videoRef.current;
      if (video && video.srcObject) {
        const tracks = video.srcObject.getTracks();
        tracks.forEach((track) => track.stop());
        video.srcObject = null;
      }
    }
  }, [showCamera]);

  // mic

  const [chatinput, setChatInput] = useState("");

  const [isRecording, setIsRecording] = useState(false);
  const [recordedBlob, setRecordedBlob] = useState(null);

  const [audio, setAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const onStart = () => {
    setIsRecording(true);
  };

  const onStop = (recordedBlob) => {
    setIsRecording(false);
    setRecordedBlob(recordedBlob.blob);
  };

  const handlePlayPause = () => {
    if (recordedBlob) {
      if (audio) {
        // If audio is present, toggle play/pause
        if (isPlaying) {
          audio.pause();
        } else {
          audio.play();
        }
        setIsPlaying(!isPlaying);
      } else {
        // If audio is not present, create a new Audio element and start playing
        const newAudio = new Audio(URL.createObjectURL(recordedBlob));
        newAudio.play();
        newAudio.addEventListener("ended", () => {
          setIsPlaying(false);
        });
        setAudio(newAudio);
        setIsPlaying(true);
      }
    }
  };

  return (
    <div className="chatFooter">
      <div className="cf-footer">
        <div className="cf-footer-text">
          <input
            type="text"
            className="form-control cf-input"
            placeholder="message"
          />
          <div className="cf-icons">
            <button className="icon-btn">
              <Smiley className="cf-btns" />
            </button>
            <button className="icon-btn" onClick={HandleCameraOpen}>
              <Camera className="cf-btns" />
            </button>
            <Dialog
              showHeader={false}
              visible={visible}
              style={{ width: "50vw" }}
              onHide={() => setVisible(false)}
            >
              <div className="cameraShow">
                <video
                  ref={videoRef}
                  autoPlay
                  muted
                  playsInline
                  style={{ width: "100%", height: "100%" }}
                />
                <button className="cameraclose" onClick={HandleCameraClose}>
                  <PhoneDisconnect />
                </button>
              </div>
            </Dialog>
            <button className="icon-btn btn-paper" onClick={handleCate}>
              <Paperclip className="cf-btns" />
              {cate && (
                <div className="paper-card">
                  <div className="paper-btn-text" onClick={SendPdf}>
                    <button>
                      <FileArrowUp />
                    </button>
                    <p>File</p>
                  </div>
                  <div className="paper-btn-text">
                    <button>
                      <MapPin />
                    </button>
                    <p>Location</p>
                  </div>
                  <div className="paper-btn-text">
                    <button>
                      <User />
                    </button>
                    <p>Contact</p>
                  </div>
                  <div className="paper-btn-text">
                    <button>
                      <FileCloud />
                    </button>
                    <p>Media</p>
                  </div>
                  <div className="paper-btn-text" onClick={SendImg}>
                    <button>
                      <ImageIcon />
                    </button>
                    <p>Gallery</p>
                  </div>
                  <div className="paper-btn-text" onClick={SendVdo}>
                    <button>
                      <VideoCamera />
                    </button>
                    <p>Video</p>
                  </div>
                </div>
              )}
            </button>
            <button
              className="icon-btn"
              onClick={() => setIsRecording(!isRecording)}
            >
              {isRecording ? (
                <Microphone className="cf-btns" />
              ) : (
                <Microphone className="cf-btns" />
              )}
            </button>
          </div>
        </div>
        <button className="icon-btns">
          <PaperPlaneTilt className="cf-btns btn-send" />
        </button>
      </div>

      <div className="audiorecodring">
        <div className="audio-box">
          <div className="d-flex justify-content-between">
            <div className="d-flex align-items-center">
              <div className="audiomic">
                <button onClick={handlePlayPause}>
                  {isPlaying ? <FaPause /> : <FaPlay />}
                </button>
              </div>
              <div className="audiowave">
                <ReactMic
                  record={isRecording}
                  className="sound-wave custom-height"
                  onStop={onStop}
                  onStart={onStart}
                  strokeColor="#000000"
                  // backgroundColor="#FF4081"
                />
              </div>
            </div>
            <button
              style={{ background: "#fff", border: "none", fontWeight: "800" ,  }}
            >
              X
            </button>
          </div>
        </div>
      </div>

      
      {ReplyBtn && (
        <div className="reply-msgs">
          <div className="reply-msg-box">
            <div className="img">
              <h6>@Mukesh</h6>
              <div className=" d-flex align-items-center">
                {icon}
                <p className="ms-1">{text}</p>
              </div>
            </div>
            <button onClick={HandleBtn}>
              <X size={18} />
            </button>
          </div>
        </div>
      )}
      {ImgSend && (
        <div className="send-img">
          <div className="send-img-box">
            <div className="img">
              <img
                src={car}
                alt=""
                style={{
                  width: "21rem",
                  borderRadius: "4px",
                  marginTop: "6px",
                }}
              />
            </div>
            <button onClick={HandleBtnImg}>
              <X size={18} />
            </button>
          </div>
        </div>
      )}
      {VdoSend && (
        <div className="send-vdo">
          <div className="send-vdo-box">
            <div className="vdo">
              <video
                controls
                src={samplevdo}
                style={{
                  width: "21rem",
                  borderRadius: "10px",
                }}
              ></video>
            </div>
            <button onClick={HandleBtnVdo}>
              <X size={18} />
            </button>
          </div>
        </div>
      )}
      {/* {PdfPages && (
        <div className="send-pdf">
          <div className="send-pdf-box">
            <div className="pdf d-flex" style={{ position: "relative" }}>
              <img
                src={PdfPages[0]}
                alt="PDF First Page"
                style={{
                  width: "14rem",
                  height: "7rem",
                  border: "2px solid #ecece6",
                  borderRadius: "6px",
                }}
              />
              <div
                className=""
                style={{
                  position: "absolute",
                  display: "flex",
                  bottom: "0px",
                  width: "100%",
                  background: "#eff5fc",
                  borderBottomLeftRadius: "4px",
                  borderBottomRightRadius: "4px",
                  padding: "4px",
                }}
              >
                <BsFileEarmarkPdf
                  style={{ color: "#1877f2", fontSize: "34px" }}
                />
                <div className="ms-2">
                  <h6>PDF-1t82t567-ehfhegh-pdf</h6>
                  <p>24-26kb</p>
                </div>
              </div>
            </div>
            <button onClick={HandleBtnPdfs}>X</button>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default ChatFooter;
