import { useState } from "react";
import VideoCallComponent from "./Components/VideoCallComponent";
export default function App() {
  const [mute, setMute] = useState(false);
  return (
    <>
      <VideoCallComponent />
    </>
  );
}

