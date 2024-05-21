import React, { useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { ReactMic } from "react-mic";

const ChatMic = () => {
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
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>Audio Recorder</h1>
        <IoMdCloseCircleOutline />
      </div>

      <div>
        <ReactMic
          record={isRecording}
          className="sound-wave"
          onStop={onStop}
          onStart={onStart}
          strokeColor="#000000"
          backgroundColor="#FF4081"
        />
        <button onClick={() => setIsRecording(!isRecording)}>
          {isRecording ? "Stop Recording" : "Start Recording"}
        </button>
        {recordedBlob && (
          <div>
            <button onClick={handlePlayPause}>
              {isPlaying ? "Pause" : "Play"} Recorded Audio
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatMic;
