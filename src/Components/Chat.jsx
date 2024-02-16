import React, { useEffect, useState } from "react";
import { IoDocument, IoSend, IoCloseCircle } from "react-icons/io5";
import Message from "./Message";

export default function Chat({ setShowChat }) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    setMessages([
      {
        "message": " Message Text",
        "type": "text",
        "revers" : false,
      },
      {
        "message": "We use transition property to add a smooth transition effect when the border color changes.",
        "type": "text",
        "revers" : true,
      },
      {
        "message": " Message Text",
        "type": "text",
        "revers" : false,
      },
      {
        "message": " https://wallpapers.com/images/hd/hd-vacation-house-in-the-beach-j4jasqgcc5ismew8.webp",
        "type": "image",
        "revers" : false,
      },
      {
        "message": " Message Text",
        "type": "text",
        "revers" : false,
      },
      {
        "message": " https://file-examples.com/storage/fedf16213165ce2d096e19a/2017/04/file_example_MP4_1280_10MG.mp4",
        "type": "file",
        "revers" : true,
      },
  
    ]);
  },[]);
  const sendMessage = () => {
    console.log(message);
    messages.push({message: message, type: "text", revers: false});
    setMessage("");
    console.log(messages.length);
  }
  return (
    <>
      <div className="right-side show">
        <div className="chat-container">
          <div className="loader">
            <img src="/img/loader.gif" alt="" />
          </div>
          <div className="chat-area">
            {
              messages.map((value, index) => <Message key={index} message={value.message} type={value.type} reverse={value.revers} />)
            }
          </div>
          <div className="chat-typing-area-wrapper">
            <div className="chat-typing-area">
              <input
                type="text"
                placeholder="Type your message..."
                className="chat-input"
                value={message}
                onChange={(text) => setMessage(text.target.value)}
              />
              <button className="video-action-button document">
                <IoDocument />
              </button>
              <input type="file" id="uploadFile" style={{ display: "none" }} />
              <button className="video-action-button send" onClick={() => sendMessage()}>
                <IoSend />
              </button>
            </div>
          </div>
          <div className="hide-chat">
            <button className="video-action-button" onClick={() => setShowChat(false)}>
              <IoCloseCircle />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
