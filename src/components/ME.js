import React from "react";
import VolunteerImage from "../image/mypic.jpg";
import "../css/ME.css"

function ME() {
  return (
    <section id="Me">
      <div className="ME-container">
        <div className="ME-box">
          <div className="ME-image">
            <img src={VolunteerImage} alt="profile" />
          </div>
          <div className="ME-text">
            <h1>김다예 | 백엔드 개발자</h1>
            <p>문제해결의 즐거움과 성장을 느낍니다. <br/>
            새로운 기술의 배움과 소통의 협력을 중요시합니다.<br/>
            주어진 일에 끝까지 책임을 갖고 임하며,<br/>
            팀원들과 협력해 최고의 결과를 만들어내기 위해 노력합니다.<br/>
            백엔드,프론트엔드에 능숙한 풀스택개발자가 되고 싶습니다.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ME;