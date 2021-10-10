import React from "react";
import bgWindow from "../assets/images/window.png";
import object1 from "../assets/images/object-01.png";
import object6 from "../assets/images/object-06.png";
import object7 from "../assets/images/object-07.png";
import object2 from "../assets/images/object-02.png";
import object3 from "../assets/images/object-03.png";
import object4 from "../assets/images/object-04.png";
import object5 from "../assets/images/object-05.png";
import imgRespon from "../assets/images/img.png";

const Brand = () => {
  return (
    <div className="brand">
      <div className="brand__top">
        <h2>Brand Story</h2>
        <p>
          모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가
          아니더라도, 모든 팀에서 다듬을 수 있습니다. 브랜드의 성공을 위한 첫
          걸음을 내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
        </p>
      </div>
      <div className="brand__center">
        <div className="object__left">
          <img src={object1} alt="" className="object__1" />
          <img src={object6} alt="" className="object__6" />
          <img src={object7} alt="" className="object__7" />
        </div>
        <div className="brand__img">
          <img src={bgWindow} alt="" className="img__desktop" />
          <img src={imgRespon} alt="" className="img__custom" />

          <div className="brand__content">
            <h2>What Happened’s Brand story</h2>
            <p>
              청춘이 있는 바이며, 말이다. 같지 노년에게서 어디 모래뿐일 무엇을
              풀이 옷을 봄바람이다. 새 천고에 놀이 내는 찾아 창공에 광야에서
              살았으며, 듣는다. 수 있는 긴지라 사는가 낙원을 웅대한 아니다. 내는
              이상 할지라도 피다. 피부가 불러 피고 인간의 타오르고 이성은 끝까지
              칼이다. 쓸쓸한 희망의 못할 것은 목숨을 수 그들을 아름답고 고행을
              끝에 설산에서 황금시대를 이상을 운다.
            </p>

            <button className="btn">see more</button>
          </div>
        </div>
        <div className="object__right">
          <img src={object2} alt="" />
          <img src={object3} alt="" />
          <img src={object4} alt="" />
          <img src={object5} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Brand;
