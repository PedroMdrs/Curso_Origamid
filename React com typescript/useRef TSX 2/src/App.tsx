import React from "react";
import videosrc from "./video.mp4";
const App = () => {
  const [play, setPlay] = React.useState(false);
  const video = React.useRef<HTMLVideoElement>(null);
  function enterPictureInPicture(videoElement: HTMLVideoElement) {
    if (
      document.pictureInPictureEnabled &&
      !videoElement.disablePictureInPicture
    ) {
      try {
        if (document.pictureInPictureElement) {
          document.exitPictureInPicture();
        }
        videoElement.requestPictureInPicture();
      } catch (err) {
        console.error(err);
      }
    }
  }
  return (
    <div>
      <div className="flex">
        {play ? (
          <button
            onClick={() => {
              setPlay(false);
              video.current?.pause();
            }}
          >
            Pause
          </button>
        ) : (
          <button
            onClick={() => {
              setPlay(true);
              video.current?.play();
            }}
          >
            Play
          </button>
        )}
        <button
          onClick={() => {
            if (video.current) video.current.currentTime += 2;
          }}
        >
          + 2s
        </button>
        <button
          onClick={() => {
            if (video.current) {
              video.current.playbackRate = 1;
            }
          }}
        >
          1x
        </button>
        <button
          onClick={() => {
            if (video.current) {
              video.current.playbackRate = 2;
            }
          }}
        >
          2x
        </button>
        <button
          onClick={() => {
            if (video.current) enterPictureInPicture(video.current);
          }}
        >
          PiP
        </button>
        <button
          onClick={() => {
            if (typeof video.current?.muted === "boolean")
              video.current.muted = !video.current.muted;
          }}
        >
          M
        </button>{" "}
      </div>
      <video ref={video} src={videosrc}></video>
    </div>
  );
};

export default App;
