import React from "react";
import Item1 from "../assets/images/news-img-01.png";
import newImg3 from "../assets/images/news-img-03.png";
import newImg4 from "../assets/images/news-img-04.png";
import newImg5 from "../assets/images/news-img-05.png";
import newObject2 from "../assets/images/news-object-02.png";
import newObject3_2 from "../assets/images/news-object-03_2.png";
import newObject3 from "../assets/images/news-object-03.png";
import newObject4 from "../assets/images/news-object-04.png";
import newObject5 from "../assets/images/news-object-05.png";

const Issue = () => {
  return (
    <div className="issue">
      <div className="img__position">
        <img src={newObject2} alt="" />
        <img src={newObject3_2} alt="" />
      </div>
      <div className="issue__top">
        <h2>Happened’s issue</h2>
        <p>
          모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가
          아니더라도, 모든 팀에서 다듬을 수 있습니다. 브랜드의 성공을 위한 첫
          걸음을 내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
        </p>

        <div className="btn__show">
          <button className="btn btn__custom">see more</button>
        </div>
      </div>

      <div className="issue__list">
        <div className="grid">
          <div className="row no-gutters">
            <div className="col l-2-4 m-6 c-12">
              <div className="issue__item issue__item--first">
                <h2>whpn issue</h2>
                <img src={Item1} alt="" />
              </div>
            </div>

            <div className="col l-2-4 m-6 c-12">
              <div className="issue__item issue__item--second">
                <div className="item__content">
                  <div className="content__title">
                    <h4>b brand</h4>
                  </div>
                  <img src={newImg5} alt="" />
                </div>
              </div>
            </div>

            <div className="col l-2-4 m-6 c-12">
              <div className="issue__item issue__item--three">
                <div className="item__content">
                  <div className="content__title">
                    <h4>c brand</h4>
                  </div>
                  <img src={newImg3} alt="" />
                </div>
              </div>
            </div>

            <div className="col l-2-4 m-6 c-12">
              <div className="issue__item issue__item--four">
                <div className="item__content">
                  <div className="content__title">
                    <h4>D brandb</h4>
                  </div>
                  <img src={newImg4} alt="" />
                </div>
              </div>
            </div>

            <div className="col l-2-4 m-6 c-12">
              <div className="issue__item issue__item--five">
                <div className="item__content">
                  <div className="content__title">
                    <h4>E brand</h4>
                  </div>
                  <img src={newImg5} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="icon__position">
          <img src={newObject3} alt="" />
          <img src={newObject4} alt="" />
          <img src={newObject5} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Issue;
