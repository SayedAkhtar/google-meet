import React from "react";
import { IoPersonCircleOutline } from "react-icons/io5";

export default function VideoTiles() {
  return (
    <>
      <div className="video-call-wrapper">
        <div className="participant-list">
          <div className="video-participant" id="remote-video">
            <ul className="participant-actions">
              <button className="btn-mute"></button>
              <button className="btn-camera"></button>
            </ul>
            <button href="#" className="name-tag">
              Patient
            </button>
            <IoPersonCircleOutline />
          </div>
          <div className="video-participant" id="local-video">
            <div className="participant-actions">
              <button className="btn-mute"></button>
              <button className="btn-camera"></button>
            </div>
            <button href="#" className="name-tag">
              Doctor
            </button>
            <IoPersonCircleOutline />
          </div>
          <div className="video-participant" id="local-video">
            <div className="participant-actions">
              <button className="btn-mute"></button>
              <button className="btn-camera"></button>
            </div>
            <button href="#" className="name-tag">
              Doctor
            </button>
            <IoPersonCircleOutline />
          </div>
        </div>
        <div className="pinned-video">
          <video src="https://file-examples.com/storage/fedf16213165ce2d096e19a/2017/04/file_example_MP4_1280_10MG.mp4"></video>
        </div>
      </div>
    </>
  );
}
