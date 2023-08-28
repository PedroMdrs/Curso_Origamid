import React from "react";
import videosrc from "./video.mp4";
const App = () => {
  const video = React.useRef<HTMLVideoElement>(null);
  React.useEffect(() => {}, []);
  return (
    <div>
      <button onClick={() => video.current?.play()}>play</button>
      <button onClick={() => video.current?.pause()}>pausar</button>
      <video ref={video} src={videosrc}></video>
    </div>
  );
};

export default App;
