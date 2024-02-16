import React from "react";
import { FaArrowRight } from "react-icons/fa";
import image from "./images/image.png";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Home = ({setvisit}) => {
  return (
    <Wrapper>
      <div className="main">
        <div className="imgdiv"><img src={image}/></div>
        <div className="txtdiv">
          <div className="name"><span className="line">---</span>I'M ANKIT KUMAR.</div>
          <div className="spec">MERNSTACK DEVELOPER</div>
          <p className="desc">I am an aspiring B.Tech CSE student with a strong foundation in problem-solving. I am excited to apply my 
skills to real-world applications, leveraging my analytical mindset to collaborate with peers and contribute to 
innovative solutions in the ever-evolving tech landscape.</p>
          <NavLink to="/about" className="aboutme" onClick={()=>{setvisit("about")}}>
            <div className="abouttxt">More About Me</div>
            <div className="arr"><FaArrowRight /></div>
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`

.main{
  display: flex;
  align-items: center;
  justify-content: center;
}

.imgdiv{
  width: 80%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
    box-shadow: #FFA200 25px -25px 8px 0px inset;
}

img{
  width: 100%;
}

.txtdiv{
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 69px 0px 53px;
  background-color: var(--backgroundColor);
}

.name{
  font-size: 38px;
    font-weight: bold;
    color: #ffa200;
}

.line{
  margin-right: 10px;
}

.spec{
  width: 100%;
    margin-left: 48px;
    font-size: 38px;
    font-weight: bold;
    color: white;
}

.desc{
  width: 100%;
  margin: 10px 0px;
  line-height: 26px;
  color: white;
}

.aboutme{
  width: 133px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid white;
    color: white;
    border-radius: 18px;
    border-right: none;
    margin-top: 15px;
}

.aboutme:hover{
  background-color: #444444;
}

.aboutme:active{
  background-color: #000000;
}



.abouttxt{
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




`

export default Home;
