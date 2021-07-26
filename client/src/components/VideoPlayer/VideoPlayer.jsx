import React, { Component } from "react";
import Video from "../UI/Video/Video";
import video from "../../assets/Yeshtery_Final.mp4";

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

  render() {
    const { play } = this.state;

    return (
      <div className={classes.videoPlayer__container}>
        <Video videoUrl={video} ref={this.videoRef} />
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
