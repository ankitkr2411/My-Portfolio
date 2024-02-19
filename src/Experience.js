import styled from "styled-components";
import experiencebg from "./images/experiencebg.jpg";

const Experience = () => {
  return (
    <Wrapper experiencebg={experiencebg}>
      <div className="bg"></div>
      <div className="main">
        <div className="head">Experience <span className="headsign">&</span> Projects</div>
        <div className="inner">
          <div className="proj">
            <div className="projhead">PROJECTS</div>
            <div className="inndiv">
              <div className="innhead">
                <span className="dot"></span> E-Commerce Mern Web Application
              </div>
              <p>
                <span className="tech">TechStack</span> ReactJS, NodeJS, MongoDB
              </p>
              <p>- User registration and login with encrypted credentials.</p>
              <p>- User registration and login with encrypted credentials.</p>
              <p>- User registration and login with encrypted credentials.</p>
              <p>- User registration and login with encrypted credentials.</p>
              <div className="link">
              <a
                href="https://github.com/ankitkr2411/MernProjectDT"
                target="_blank"
              >
                Github Link
              </a>
              <a href="https://dineshtextiles.netlify.app/" target="_blank">
                Website Link
              </a>
              </div>
            </div>
            <div className="inndiv">
              <div className="innhead">
                <span className="dot"></span> Appointment Booking Java GUI Application 
              </div>
              <p>
                <span className="tech">TechStack</span> JAVA , MYSQL
              </p>
              <p>- User-friendly graphical interface for booking appointments.</p>
              <p>- Day and time selection for appointments. </p>
              <p>- User registration and login with encrypted credentials.</p>
              <p>- Present and Past booked Appointments. </p>
              <div className="link">
              <a
                href="https://github.com/ankitkr2411/Appointment-Booking-Java-Application"
                target="_blank"
              >
                Github Link
              </a>
              </div>
            </div>
          </div>
          <div className="proj">
            <div className="projhead">CERTIFICATES</div>
            <div className="inndiv">
              <div className="innhead">
                <span className="dot"></span> Hakerrank 5 STAR Golden Badge for solving problems in JAVA 
              </div>
              <div className="link">
              <a
                href="https://www.hackerrank.com/akgamers_930"
                target="_blank"
              >
                Certificate Link
              </a>
              </div>
            </div>
            <div className="inndiv">
              <div className="innhead">
                <span className="dot"></span> Hackerrank Skill Certification Java 
              </div>
              <div className="link">
              <a
                href="https://www.hackerrank.com/certificates/f9887d110a42"
                target="_blank"
              >
                Certificate Link
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .bg {
    background-image: url("${(props) => props.experiencebg}");
    position: relative;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100vh;
  }

  .bg::after {
    content: "";
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(5px);
    background-color: #00000059;
  }

  .main {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }

  .head {
    font-weight: bold;
    color: var(--color);
    letter-spacing: 3px;
    font-size: 36px;
    padding: 10px;
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 43px;
    backdrop-filter: blur(16px); 
  }

  .headsign{
    color:white;
  }

  .inner {
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  .proj {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    color: white;
    margin: 0px 70px;
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 13px;
    padding: 9px;
    backdrop-filter: blur(9px);
    height: 100%;
  }

  .projhead{
    font-size:30px;
    font-weight: bold;
    color:var(--color);
    margin-bottom:10px;
  }

  .inndiv{
    display: flex;
    flex-direction: column;
    padding: 10px;
    justify-content: center;
    color: white;
    width: 100%;

  }

  .innhead {
    font-size: 20px;
    font-weight: bold;
    color: var(--color);
    display: flex;
    align-items: center;
  }

  .dot {
    width: 10px;
    height: 10px;
    border-radius: 30px;
    background-color: var(--color);
    margin-right: 5px;
  }

  p {
    margin: 0px 0px 10px 19px;
    font-size: 13px;
  }

  .tech {
    font-weight: bold;
  }

  .link{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px;
    font-size: 12px;
    margin-bottom:5px;
  }

  a {
    color: #ababff;
  }
`;

export default Experience;
