import React from 'react'
import { FaJava } from 'react-icons/fa'
import { DiJavascript } from "react-icons/di";
import { GrReactjs } from "react-icons/gr";
import { IoLogoNodejs } from 'react-icons/io5';
import { SiMongodb, SiMysql } from "react-icons/si";
import styled from 'styled-components';
import skillsbg from "./images/skillsbg.jpg";

const Skills = () => {
  return (
    <Wrapper skillsbg={skillsbg}>
      <div className='bgimage'></div>
    <div className='main'>
      <div className='head'><span className='my'>MY</span> SKILLS</div>
      <div className='gri'>
      <div className='logo'><FaJava /><span>JAVA</span></div>
      <div className='logo'><DiJavascript /><span>JAVASCRIPT</span></div>
      <div className='logo'><GrReactjs /><span>REACTJS</span></div>
      <div className='logo'><IoLogoNodejs /><span>NODEJS</span></div>
      <div className='logo'><SiMysql /><span>MYSQL</span></div>
      <div className='logo'><SiMongodb /><span>MONGODB</span></div>
      </div>
    </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`

.bgimage{
  position:relative;
  background-image: url("${(props)=>props.skillsbg}");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
  height: 100vh;
  
}

.bgimage::after{
  content:"";
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, #0000008c,#4800ff29, transparent,#4800ff29,#0000008c);
  backdrop-filter: blur(2px);
}

.main{
  position: absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100vh;
    align-items: center; 
}

.head{
  font-size: 52px;
    color: white;
    font-weight: bold;
    letter-spacing: 7px;
    border: 2px solid rgba(255,255,255,0.2);
    padding: 10px;
    border-radius: 16px;
    backdrop-filter: blur(5px);
    background-color: rgb(0 0 0 / 41%);
}

.my{
  font-size: 52px;
  display: inline;
  color: var(--color);
}

.gri{
  display: grid;
    grid-template-columns: repeat(3,271px);
    grid-gap: 45px 113px;
    grid-column: 1px;
    padding-right: 70px;
    color: var(--color);
}

.logo{
  font-size: 150px;
    margin: 10px 38px;
    background-color: rgb(0 0 0 / 41%);
    border: 2px solid rgba(255,255,255,0.2);
    backdrop-filter: blur(5px);
    padding: 16px;
    border-radius: 25px;
    height: 220px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

span{
  font-size: 30px;
    display: block;
    margin-top: 10px;
    font-weight: bold;
    color:white;
}


`

export default Skills