import React from "react";
import {IoCloudDownload } from "react-icons/io5";
export default function Message({ message, type, reverse }) {
  if (type === "image") {
    return (
      <div className={reverse ? "message-wrapper reverse" : "message-wrapper"}>
        <div className="message-content">
          <div className="message">
            <a className="message-image" href={ message } target="_blank" rel="noreferrer">
                <img className="message-image--img" src={ message } alt="" />
              
            </a>
          </div>
        </div>
      </div>
    );
  } 
  else if(type === "file"){
    return (
        <div className={reverse ? "message-wrapper reverse" : "message-wrapper"}>
          <div className="message-content">
            <div className="message">
              <a className="message-image" target="_blank" href={message} rel="noreferrer" download style={{ fontSize: "4rem", padding: "0px 1rem", boxSizing: "content-box", display:"flex", justifyContent: "center" }}>
                <IoCloudDownload/>
              </a>
              <p className="message-text" style={{ wordWrap: "break-word" }}>
              {message.split('/').reverse()[0]}
            </p>
            </div>
          </div>
        </div>
      );
  }
  else {
    return (
      <div className={reverse ? "message-wrapper reverse" : "message-wrapper"}>
        <div className="message-content">
          <div className="message">
            <p className="message-text" style={{ wordWrap: "break-word" }}>
              {message}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
