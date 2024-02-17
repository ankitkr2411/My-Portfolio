import { NavLink } from "react-router-dom"
import resume from "./resume/Resume.pdf"
import { MdDownload } from "react-icons/md";
import styled from "styled-components"


const About = () => {
  return (
    <Wrapper>
    <div className="main">
    <div className="res">RESUME</div>
      <div className="head"><span className="ab">ABOUT</span> ME</div>
      <div className="inner">
      <div className="personalbox">
        <div className="perstxt">PERSONAL INFOS</div>
        <div className="infobox">
          <p className="info">First Name: <span>Ankit</span></p>
          <p className="info">Last Name: <span>Kumar</span></p>
        </div>
        <div className="infobox">
          <p className="info">Age: <span>21 Years</span></p>
          <p className="info">Nationality: <span>Indian</span></p>
        </div>
        <div className="infobox">
          <p className="info">Specialzation <span>MernStack</span></p>
          <p className="info">Address: <span>Patna,Bihar</span></p>
        </div>
        <div className="infobox">
          <p className="info">Phone: <span>7004741510</span></p>
          <p className="info">Email: <span>ankitkr2411@gmail.com</span></p>
        </div>
        <div className="infobox">
          <p className="info">Linkedin: <span><a href="www.linked.com/ankitkr2411">ankitkr2411</a></span></p>
          <p className="info">Language: <span>English, Hindi</span></p>
        </div>
      </div>
      <div className="personalbox">
        <div className="perstxt">EDUCATION</div>
        <div className="eduinfo">
          <div className="edname">
          <div className="symb"></div>
          <div className="name">DEHRADUN INSTITUTE OF TECHNOLOGY, (DEHRADUN)</div>
          </div>
          <div className="edmaj">
          <div className="maj">Major: <span>B.TECH (C.S.E.)</span></div>
          <div className="cgp">CGP: <span>8.1</span></div>
          </div>

          
        </div>
        <div className="eduinfo">
          <div className="edname">
          <div className="symb"></div>
          <div className="name">DIGDARSHAN SECONDARY SCHOOL, (PATNA)</div>
          </div>
          <div className="edmaj">
          <div className="maj">Major: <span>12th (C.B.S.E.)</span></div>
          <div className="cgp">CGP: <span>6.8</span></div>
          </div>

          
        </div>
        <div className="eduinfo">
          <div className="edname">
          <div className="symb"></div>
          <div className="name">DON BOSCO ACADEMY, (PATNA)</div>
          </div>
          <div className="edmaj">
          <div className="maj">Major: <span>10th (I.C.S.E.)</span></div>
          <div className="cgp">CGP: <span>8.8</span></div>
          </div>

          
        </div>
      
      </div>
      
      </div>
      <NavLink to={resume} download="Example-PDF-document" target="_blank" rel="noreferrer" className="butt">
            <div className="dowtxt">Download Resume</div>
            <div className="arr"><MdDownload /></div>
          </NavLink>
    </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`

.main{
  display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: var(--backgroundColor);
}

.res{
  font-size: 81px;
    font-weight: bold;
    color: #2d2c2b;
    position: absolute;
    top: 29px;
    letter-spacing: 22px;
}

.head{
  font-size: 43px;
    font-weight: bold;
    color: var(--color);
    position: absolute;
    top: 50px;
    letter-spacing: 6px;
}

.ab{
  color: white;
  font-size: 43px;
}

.inner{
  display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.personalbox{
  display: flex;
  flex-direction: column;
  justify-items: center;
  color: white;
  margin:0px 20px;
  padding: 43px;
  /* border: 1px solid #ffa200; */
  box-shadow: var(--color) 0px 0px 12px -4px;
  border-radius: 10px;
}

.perstxt{
  font-size: 24px;
    font-weight: bold;
    color: var(--color);

}

.infobox{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 14px 0px;
  font-size: 14px;
}

.info{
  width: 200px;
}

span{
  font-weight: bold;
  font-size: 16px;
}

a{
  color: white;
}

.butt{
  width: 159px;
  font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid white;
    color: white;
    border-radius: 18px;
    border-right: none;
    margin-top: 40px;
}

.butt:hover{
  background-color: #444444;
  box-shadow: var(--color) 0px 0px 6px 2px;
}

.butt:active{
  background-color: #000000;
  box-shadow: var(--color) 0px 0px 0px 0px;
}



.dowtxt{
  font-size: 12px;
  margin: 0px 10px;
}

.arr{
  font-size: 16px;
  background-color: #ffa200;
  padding: 7px;
  border-radius: 25px;
  height: 29px;
}


.eduinfo{
  display: flex;
  flex-direction: column;
  margin: 23px 0px;
}

.edname{
  display: flex;
    /* justify-content: center; */
    align-items: center;
}

.symb{
  width: 10px;
  height: 10px;
  border-radius: 10px;
  background-color: white;
  margin-right: 5px;
}

.name{
  color: var(--color);
  font-weight: bold;
}

.edmaj{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 15px;
  margin-top: 3px;
}

.maj{
  font-size:13px;

}

.maj>span{
  font-size: 13px;
}

.cgp{
  font-size:13px;
}

.cgp>span{
  font-size: 13px;
}





`

export default About