import React, { Component } from "react";
import Video from "../UI/Video/Video";

import classes from "./VideoPlayer.module.scss";

class VideoPlayer extends Component {
  constructor(props) {
    super(props);

    this.videoRef = React.createRef();
    this.state = {
      play: false,
    };
  }

  playVideoHandler = () => {
    this.videoRef.current.play();
    this.setState({ play: true });
  };

  pauseVideoHandler = () => {
    if (this.videoRef.current.paused) {
      return;
    }
    this.videoRef.current.pause();
    this.setState({ play: false });
  };

  render() {
    const { play } = this.state;

    return (
      <div
        onClick={this.pauseVideoHandler}
        className={classes.videoPlayer__container}
      >
        <Video
          videoUrl="https://yeshtery.herokuapp.com/public/video/Yeshtery_Final.mp4"
          ref={this.videoRef}
        />
        {!play && (
          <button className={classes.paly__btn} onClick={this.playVideoHandler}>
            <img className="img-fluid" src="/images/play.svg" alt="play" />
          </button>
        )}
      </div>
    );
  }
}

export default VideoPlayer;
