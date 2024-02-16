import React, { useState } from "react";
import {
  IoVideocam,
  IoVideocamOff,
  IoMicSharp,
  IoMicOffSharp,
  IoChatbubbleEllipsesSharp,
} from "react-icons/io5";

import VideoTiles from './VideoTiles'
import Chat from './Chat'

export default function VideoCallComponent() {
    const [showChat, setShowChat] = useState(false);
  return (
    <div className="app-container">
      <div className="app-main">
        <VideoTiles/>
        {showChat ? <Chat setShowChat={setShowChat}/> : ""}
        <div className="video-call-actions">
          <button className="video-action-button mic">
            <IoMicSharp />
          </button>
          <button className="video-action-button camera">
            <IoVideocam />
          </button>
          <button className="video-action-button endcall">Leave</button>
          <button className="expand-btn video-action-button maximize" onClick={() => setShowChat(!showChat)}>
            <IoChatbubbleEllipsesSharp />
          </button>
        </div>
      </div>
    </div>
  );
}
