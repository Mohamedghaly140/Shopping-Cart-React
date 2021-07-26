import React, { useRef, useImperativeHandle, useEffect } from "react";

const Video = React.forwardRef(({ videoUrl }, ref) => {
  const videoRef = useRef();

  const playHandler = () => {
    videoRef.current.play();
  };

  useImperativeHandle(ref, () => {
    return {
      play: playHandler,
    };
  });

  useEffect(() => {
    console.dir(videoRef.current);
  }, []);

  return (
    <video width="100%" height="100%" ref={videoRef}>
      <source src={videoUrl} type="video/mp4" />
      {/* <source src="movie.ogg" type="video/ogg" /> */}
      Your browser does not support the video tag.
    </video>
  );
});

export default Video;
