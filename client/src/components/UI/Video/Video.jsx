import React, { useRef, useImperativeHandle } from "react";
import poster from "../../../images/poster.jpg";
import classes from "./Video.module.scss";

const Video = React.forwardRef(({ videoUrl }, ref) => {
  const videoRef = useRef();

  const playHandler = () => {
    videoRef.current.play();
  };

  const pauseHandler = () => {
    videoRef.current.pause();
  };

  useImperativeHandle(ref, () => {
    return {
      play: playHandler,
      pause: pauseHandler,
      paused: videoRef.current.paused,
    };
  });

  return (
    <video
      className={classes.video}
      width="100%"
      height="100%"
      ref={videoRef}
      poster={poster}
    >
      <source src={videoUrl} type="video/mp4" />
      {/* <source src="movie.ogg" type="video/ogg" /> */}
      Your browser does not support the video tag.
    </video>
  );
});

export default Video;
