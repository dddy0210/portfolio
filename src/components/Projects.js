import React from "react";
import "../css/Project.css";
import projectThumbnail from "../image/LOGO.png";
import Modal from "./Modal";
import useModal from "./useModal";

function Projects() {
  const {
    isModalOpen,
    modalTitle,
    modalMessage,
    modalActions,
    closeModal,
  } = useModal();

  const projectData = [
    {
      title: "여행 기록작성 및 공유 웹",
      duration: "2024.11.18 ~ 2024.12.30",
      members: "5명",
      roles: [
        "좋아요 API구현",
        "CRUD API 기능 구현",
        "프로필 사진 변경(BACKEND)",
        "FRONT 디자인",
        "프로젝트 문서화 및 최종 발표 준비",
      ],
      thumbnail: projectThumbnail,
      links: [
        { url: "http://www.countryrat.site", text: "프로젝트 바로가기" },
        {
          url: "https://github.com/dddy0210/TEAM_travel",
          text: "프로젝트 코드(GITHUB)",
        },
        {
          url: "https://docs.google.com/presentation/d/1gYENdUDnF_G8he_EOOIL7D55LpJsIAyr/edit#slide=id.p2",
          text: "기술문서(진행중)",
        },
      ],
    }
  ];

  return (
    <section id="projects">
      <h2>PROJECTS</h2>
      <div className="projects-container">
        {projectData.map((project, index) => (
          <article key={index}>
            <div className="image-text">
              <img src={project.thumbnail} alt={`project-thumbnail-${index}`} />
              <p>{project.title}</p>
            </div>
            <div className="project-details">
              <h3>프로젝트 개요</h3>
              <p>개발기간: {project.duration}</p>
              <p>개발인원: {project.members}</p>
              <p>담당역할:</p>
              <ul>
                {project.roles.map((role, roleIndex) => (
                  <li key={roleIndex}>{role}</li>
                ))}
              </ul>
            </div>
            <div className="project-links">
            {project.links &&
                project.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.text}
                  </a>
                ))}
            </div>
          </article>
        ))}
      </div>

      {/* 모달 창 */}
      {isModalOpen && (
        <Modal
          title={modalTitle}
          content={modalMessage}
          actions={modalActions}
          onClose={closeModal}
        />
      )}
    </section>
  );
}

export default Projects;
