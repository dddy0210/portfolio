import React from "react";
import "../css/Information.css";

function Information() {
  return (
    <section id="infomation">
      <h1>Information</h1>
      <div className="box-container">
        <div className="box">
          <h2>CHANNEL</h2>
          <p>
            <a
              href="https://github.com/dddy0210"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/dddy0210
            </a>
          </p>
        </div>
        <div className="box">
          <h2>CONTACTS</h2>
          <p>010-2411-6364</p>
          <p>dddy0210@naver.com</p>
        </div>
        <div className="box">
          <h2>EDUCATION</h2>
          <p>2024.07 ~ 2025.01</p>  
          <p>코리아IT아카데미 <br/>AWS활용 풀스택 개발</p>
          <p>2010.02 ~ 2012.02</p>
          <p>김포대학 <br/> 유비쿼터스IT과 </p>
        </div>
        <div className="box">
          <h2>WORK</h2>
          <p>2021.12 ~ 2024.03</p> 
          <p>설레설기(대표)<br/> 케이크 제작 및 관리</p>
          <p>2016.05 ~ 2021.11</p> 
          <p>올리브영(매니저)<br/> 매장 관리, 고객 응대</p>
          <p>2012.01 ~ 2013.10</p> 
          <p>라온컴즈(사원)<br/> 앱개발 QA, 디자인 보조</p>
        </div>
      </div>
    </section>
  );
}

export default Information;
