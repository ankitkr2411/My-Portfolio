import React from 'react'
import { FaJava } from 'react-icons/fa'
import { DiJavascript } from "react-icons/di";
import { GrReactjs } from "react-icons/gr";
import { IoLogoNodejs } from 'react-icons/io5';
import { SiMongodb, SiMysql } from "react-icons/si";
import styled from 'styled-components';

const Skills = () => {
  return (
    <Wrapper>
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

.main{
  display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: var(--backgroundColor);
    height: 100vh;
    align-items: center;
}

.head{
  font-size: 52px;
    color: white;
    font-weight: bold;
    letter-spacing: 7px;
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
}

.logo{
  font-size: 150px;
  margin: 10px 38px;
  background-color: var(--color);
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
}


`

export default Skills