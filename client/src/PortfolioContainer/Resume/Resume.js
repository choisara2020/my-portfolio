import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    {skill: "HTML", ratingPercentage: 85},
    {skill: "CSS", ratingPercentage: 80},
    {skill: "JavaScript", ratingPercentage: 85},
    {skill: "jQuery", ratingPercentage: 85},
    {skill: "React.js", ratingPercentage: 85},
    {skill: "Node.js", ratingPercentage: 85},
    {skill: "Express JS", ratingPercentage: 85},
    {skill: "RESTful Apis", ratingPercentage: 85},
    {skill: "PostgreSql", ratingPercentage: 85},
    {skill: "Mocha", ratingPercentage: 70},
    {skill: "Chai", ratingPercentage: 70},
    {skill: "Jest", ratingPercentage: 85},
    {skill: "Knex", ratingPercentage: 85},
    {skill: "GitHub", ratingPercentage: 90},
    {skill: "Render", ratingPercentage: 90},
    {skill: "Heroku", ratingPercentage: 85},
];

  const projectsDetails = [
        {
            title: "Personal Portfolio Website",
            duration: {fromDate: "2022", toDate: "2023"},
            description: "A Personal Porfotlio website to showcase all my details and projects in one place.",
            subHeading: "Technology Used: React, Bootstrap.",
        },
        {
            title: "Restaurant Reservation App",
            duration: {fromDate: "2022", toDate: "2023"},
            description: "Created a reservation system for fine dining restaurants. The software is used only by restaurant personnel when a customer calls to request a reservation. Customers will not access the system online.",
            subHeading: "Technology Used: React, Node.js, Express, Knex and PostgreSQL.",
        },
        {
            title: "Movie Database Application",
            duration: {fromDate: "2022", toDate: "2023"},
            description: "Assembled the back end of a movie website allowing any user to search for their favorite movies.",
            subHeading: "Technology Used: Node.js, Express, and Knex. Version control with Git.",
        },
        {
            title: "Study Tool Application",
            duration: {fromDate: "2022", toDate: "2023"},
            description: "Created an application that allows users to create, edit, and delete decks and cards within them.",
            subHeading: "Technology Used:  JavaScript, React, Express, Knex, HTML and CSS. Progress/Versions tracked with Git.",
        },
        {
            title: "Encryption/Decryption Application",
            duration: {fromDate: "2022", toDate: "2023"},
            description: "Built to be an encryption/decryption application to communicate and read top-secret messages.",
            subHeading: "Technology Used: JavaScript ES6, HTML5, Node.js, Bootstrap, Mocha, Chai.",
        },
    ];

  const resumeDetails = [
        <div className="resume-screen-container" key="education">
            <ResumeHeading
            heading={"Thinkful Immersive Software Engineer Program"}
            subHeading={"Full Stack Developer"}
            fromDate={"08/2022"}
            toDate={"01/2023"}
            />
            <ResumeHeading
            heading={"Georgia State University: Perimeter College"}
            subHeading={"BS: Nursing"}
            fromDate={"08/2010"}
            toDate={"05/2012"}
            />
            <ResumeHeading
            heading={"Chattahoochee High School"}
            subHeading={"High School Diploma"}
            fromDate={"08/2006"}
            toDate={"05/2010"}
            />
        </div>,

/*WORK HISTORY*/
    <div className="resume-screen-container" key="work-experience">
            <div className="experience-container" >
            <ResumeHeading
            heading={"Thinkful: Immersive Software Engineer"}
            subHeading={"FullStack Developer"}
            fromDate={"08/2022"}
            toDate={"01/2023"}
            />
                <div className="experience-description">
                <span className="resume-description-text">
                    -Learned industry best practices and software development standards with a focus on Javascript, HTML5, CSS3, React Native, Node.js, PostgreSQL, RESTful APIs, algorithms, and data structures.
                </span>
                <br/>
                <span className="resume-description-text">
                    -Developed and deployed mobile-first applications while learning new languages and frameworks, spending several hours per week collaborating with senior web developers in a mentor-student relationship.
                </span>
                <br/>
                <span className="resume-description-text">
                    -Created multiple applications shown in Project Details.
                </span>
                </div>
                <br/>
            <ResumeHeading
            heading={"Jojo's Beloved Cocktail Lounge"}
            subHeading={"General Manager"}
            fromDate={"10/2019"}
            toDate={"11/2022"}
            />
            <div className="experience-description">
                <span className="resume-description-text">
                    -Provided exceptional upscale and memorable experience for guests including VIP members in an exclusive speakeasy that held up to 250 guests.
                </span>
                <br/>
                <span className="resume-description-text">
                    -Created a VIP Membership program and created the reservation system and procedures.
                </span>
                <br/>
                <span className="resume-description-text">
                    -Planned multiple events weekly for parties, industry nights, and educational nights held every Monday working with other Brand Ambassadors to represent products.
                </span>
                <br/>
                <span className="resume-description-text">
                    -Used kanban boards for project management and created an excel sheet to track our inventory and predict supplies.
                </span>
            </div>
            <br/>
            <ResumeHeading
            heading={"Barmetrix"}
            subHeading={"Consultant/ GSE(Guest Service Evaluation) Manager"}
            fromDate={"11/2018"}
            toDate={"12/2020"}
            />
                <div className="experience-description">
                <span className="resume-description-text">
                    -Coached over 300 bar/restaurant operations teams in Los Angeles, providing expertise in solving some of the most common issues in hospitality businesses worldwide today.
                </span>
                <br/>
                <span className="resume-description-text">
                    -Created the Guest Service Evaluations Program for Barmetrix LA. 
                </span>
                <br/>
                <span className="resume-description-text">
                    -Consulted with multiple restaurant/bar groups in LA, providing data on Cost of Goods, Profit and Loss, Variance, and more to drive up the company's profit and assist in creating an elevated guest environment.
                </span>
                <br/>
                <span className="resume-description-text">
                    -Improved Gross Sales for business by at least 16% after 4 months of consultation.
                </span>
            </div>
            <br/>
            <ResumeHeading
            heading={"4100 Bar"}
            subHeading={"General Manager"}
            fromDate={"11/2016"}
            toDate={"12/2019"}
            />
            <div className="experience-description">
                <span className="resume-description-text">
                    -Created and maintained positive morale with the bar staff which ensured high levels of customer satisfaction through excellent sales service, seating up to 200 guests.
                </span>
                <br/>
                <span className="resume-description-text">
                    -Led weekly meetings with at least 5 distribution representatives, choosing products that are featured on the menu based on knowledge of the clientele, and maintaining our inventory of over $3,000 worth of products. 
                </span>
                <br/>
                <span className="resume-description-text">
                    -Reduced Bar Variance of Loss from 28% to consistently running under 5% Variance of Loss as well as lowering Venue’s Cost of Goods Sold from 24% to consistently running around 15%.
                </span>
                <br/>
                <span className="resume-description-text">
                    -Improved Gross Sales by approximately 18% each year as General Manager.
                </span>
                <br/>
            </div>
            </div>
        </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      <div className="experience-container">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
      </div>
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Teaching"
        description="Apart from being a tech enthusiast and a code writer, i also love to teach people what i know simply because i believe in sharing."
      />
      <ResumeHeading
        heading="Music"
        description="Listening to soothing music is something i can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on."
      />
      <ResumeHeading
        heading="Competitive Gaming"
        description="I like to challenge my reflexes a lot while competing in football games, pushing the rank and having interactive gaming sessions excites me the most."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
