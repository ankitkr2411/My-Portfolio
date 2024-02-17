import React from "react";
import { FaArrowRight } from "react-icons/fa";
import image from "./images/image.png";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import homebg from "./images/homebg.jpg";

const Home = ({setvisit}) => {
  return (
    <Wrapper homebg={homebg}>
      <div className="bg"></div>
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

.bg{
  position: relative;
  background-image:url("${(props)=>props.homebg}");
  background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  width:100%;
  height:100vh;
}

.bg::after{
  content:"";
  position:absolute;
  top:0;
  width:100%;
  height:100%;
  backdrop-filter: blur(4px);
  background-color: #00000029;

}



.main{
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width:100%;
  height:100vh;
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
  width: 138px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    border: 1px solid white;
    color: white;
    border-radius: 18px;
    border-right: none;
    margin-top: 15px;
}

.aboutme:hover{
  background-color: #444444;
  box-shadow: var(--color) 0px 0px 6px 2px;
}

.aboutme:active{
  background-color: #000000;
  box-shadow: var(--color) 0px 0px 0px 0px;
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
