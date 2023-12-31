import { useRef } from "react";
import video from "../assets/video.mp4";
import { Slider } from "./ui/slider";
import useVideoPlayer from "@/hooks/videoplayer";

const VideoPlayer = () => {
  const videoElement = useRef(null);
  const {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleVideoSpeed,
    toggleMute,
  } = useVideoPlayer(videoElement);
  return (
    <div className="video-wrapper">
      <video src={video} ref={videoElement} onTimeUpdate={handleOnTimeUpdate} />
      <div className="controls">
        <div className="actions">
          <button onClick={togglePlay}>
            {!playerState.isPlaying ? (
              <i className="bx bx-play"></i>
            ) : (
              <i className="bx bx-pause"></i>
            )}
          </button>
        </div>
        {/* <input
            type="range"
            min="0"
            max="100"
            value={playerState.progress}
            onChange={(e) => handleVideoProgress(e)}
          /> */}
        <Slider
          className="w-80"
          max={100}
          min={0}
          value={[playerState.progress]}
          step={1}
          onValueChange={(e) => handleVideoProgress(e)}
        />
        <select
          className="velocity"
          value={playerState.speed}
          onChange={(e) => handleVideoSpeed(e)}
        >
          <option value="0.50">0.50x</option>
          <option value="1">1x</option>
          <option value="1.25">1.25x</option>
          <option value="2">2x</option>
        </select>
        <button className="mute-btn" onClick={toggleMute}>
          {!playerState.isMuted ? (
            <i className="bx bxs-volume-full"></i>
          ) : (
            <i className="bx bxs-volume-mute"></i>
          )}
        </button>
      </div>
    </div>
  );
};

export default VideoPlayer;
