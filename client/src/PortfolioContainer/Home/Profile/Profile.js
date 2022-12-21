import React from "react";
import Typical from "react-typical";
import './Profile.css';

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className='colz-icon'>
            <a href="https://www.linkedin.com/in/sarachoi2022/">
              <i className="fa fa-linkedin-square"></i>
            </a>
            <a href="https://github.com/choisara2020?tab=repositories">
              <i className="fa fa-github-square"></i>
            </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Sara</span>
            </span>
          </div>
          <div className='profile-details-role'>
            <span className='primary-text'>
                {" "}
                <h1>
                    {" "}
                    <Typical 
                    loop={Infinity}
                    steps={[
                        "Full Stack Developer 💻",
                        1000,
                        "PERN Stack Dev",
                        1000,
                        "PostgreSql",
                        1000,
                        "Express",
                        1000,
                        "React",
                        1000,
                        "Node.js",
                        1000,
                        "and More!",
                        1000,
                    ]}
                    />
                </h1>
                <span className='profile-role-tagline'>
                A highly motivated and driven Full-Stack software engineer with PERN technical stack.
                </span>
            </span>
          </div>
          <div className='profile-options'>
            <button className='btn primary-btn'
            > Hire Me </button>
            <a href='SaraChoiResume.pdf' download='Sara SaraChoiResume.pdf'>
                <button className='btn highlighted-btn'>Get Resume</button>
            </a>
          </div>
        </div>
        <div className='profile-picture'>
            <div className='profile-picture-background'></div>
        </div>
      </div>
    </div>
  );
}
