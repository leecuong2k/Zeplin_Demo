import React from "react";
import snsIcon1 from "../assets/images/snsicon-01.png";
import snsIcon2 from "../assets/images/snsicon-02.png";
import snsIcon3 from "../assets/images/snsicon-03.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__top">
        <div className="grid wide">
          <div className="row">
            <div className="col l-6 m-12 c-12">
              <div className="top__left">
                <h2>what happened</h2>
                <div>
                  <a href="##">[공지] 개인 정보 처리 방침 변경 사전 안내</a>
                  <a href="##">[공지] 29CM 강남 스토어 영업 종료</a>
                  <a href="##">[공지] 개인 정보 처리 방침 변경 사전 안내</a>
                  <a href="##">[공지] iOS 10 이하 버전 지원 중단 안내 </a>
                  <a href="##">[공지] 개인 정보 처리 방침 변경 사전 안내</a>
                </div>
              </div>
            </div>

            <div className="col l-6 m-12 c-12">
              <div className="top__right">
                <div className="row">
                  <div className="col l-3 m-6 c-6">
                    <div className="right__item">
                      <h4>about us</h4>

                      <div>
                        <a href="##">회사 소개</a>
                        <a href="##">인재 채용</a>
                        <a href="##">상시 할인 혜택</a>
                      </div>
                    </div>
                  </div>
                  <div className="col l-3 m-6 c-6">
                    <div className="right__item">
                      <h4>my order</h4>
                      <div>
                        <a href="##">내 주문</a>
                        <a href="##">주문 배송 </a>
                        <a href="##">취소 / 교환 / 반품 내역</a>
                        <a href="##">상품 리뷰 내역</a>
                        <a href="##">증빙 서류 발급</a>
                      </div>
                    </div>
                  </div>
                  <div className="col l-3 m-6 c-6">
                    <div className="right__item">
                      <h4>my account</h4>

                      <div>
                        <a href="##">회원 정보 수정</a>
                        <a href="##">인재 채용</a>
                        <a href="##">마일리지 현황</a>
                        <a href="##">쿠폰</a>
                      </div>
                    </div>
                  </div>
                  <div className="col l-3 m-6 c-6">
                    <div className="right__item">
                      <h4>help</h4>
                      <div>
                        <a href="##">1 : 1 상담 내역</a>
                        <a href="##">상품 Q & A 내역</a>
                        <a href="##">공지 사항</a>
                        <a href="##">자주하는 질문</a>
                        <a href="##">고객의 소리</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="grid wide ">
          <div className="row">
            <div className="col l-8 m-8 c-12">
              <div className="bottom__left">
                <p>
                  © 2020-2021 what happened corp l (주) 왓헤픈 ｜ 대표자 :
                  홍길동 ｜ 사업자 등록번호 : 356-00-00000 ㅣ test0101@what
                  happened.co.kr 서울특별시 강남구 도산대로 8길 17 ｜ FAX :
                  070-0000-0000 l 서비스 이용약관 l 개인정보처리방침
                </p>
              </div>
            </div>
            <div className="col l-4 m-4 c-12">
              <div className="bottom__right">
                <div>
                  <a href="##">
                    <img src={snsIcon1} alt="" />
                  </a>

                  <a href="##">
                    <img src={snsIcon2} alt="" />
                  </a>

                  <a href="##">
                    <img src={snsIcon3} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
