import React from "react";
import videoImg from "../assets/images/video.png";
import videoObject1 from "../assets/images/video-object-01.png";
import videoObject2 from "../assets/images/video-object-02.png";
import videoObject3 from "../assets/images/video-object-03.png";
import videoObject4 from "../assets/images/video-object-04.png";
import videoObject5 from "../assets/images/video-object-05.png";
import videoObject6 from "../assets/images/video-object-06.png";
import videoObject7 from "../assets/images/video-object-07.png";
import videoObject8 from "../assets/images/video-object-08.png";
import videoObject9 from "../assets/images/video-object-09.png";

const Happened = () => {
  return (
    <div className="happened__section">
      <img src={videoObject5} alt="" />
      <div className="happened__title">
        <h2>what happened</h2>
        <p>
          How to create mobile-optimized videos in minutes. Not a designer,
          every team makes a lot of videos Can be trimmed. Take the first{" "}
        </p>

        <div className="btn__more">
          <button className="btn">see more</button>
        </div>
      </div>

      <div className="happened__center">
        <div className="happened__img">
          <img src={videoImg} alt="" />
        </div>

        <div className="video__object">
          <img src={videoObject1} alt="" />
          <img src={videoObject2} alt="" />
          <img src={videoObject3} alt="" />
          <img src={videoObject4} alt="" />
          <img src={videoObject6} alt="" />
          <img src={videoObject7} alt="" />
          <img src={videoObject8} alt="" />
          <img src={videoObject9} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Happened;
