import { IoHomeSharp } from "react-icons/io5";
import { IoPersonSharp } from "react-icons/io5";
import { IoCodeSlash } from "react-icons/io5";
import { IoSchoolSharp } from "react-icons/io5";
import { BiSolidMessage } from "react-icons/bi";
import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Sidebar = ({visit,setvisit}) => {

  



  return (
    <Wrapper visit={visit}>
      <div className="main">
        <NavLink to="/" className="home icon" onClick={()=>{setvisit("home")}}>
          <IoHomeSharp />
          <div className="info">Home</div>
        </NavLink>

        <NavLink to="/about" className="about icon" onClick={()=>{setvisit("about")}}>
          <IoPersonSharp />
          <div className="info">About Me</div>
        </NavLink>

        <NavLink to="/skills" className="skill icon" onClick={()=>{setvisit("skill")}}>
          <IoCodeSlash />
          <div className="info">Skills</div>
        </NavLink>

        <NavLink to="/experience" className="exper icon" onClick={()=>{setvisit("exper")}}>
          <IoSchoolSharp />
          <div className="info">Experience</div>
        </NavLink>

        <NavLink to="/contact" className="contact icon" onClick={()=>{setvisit("contact")}}>
          <BiSolidMessage />
          <div className="info">Contact</div>
        </NavLink>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    width: 59px;
    right: 0px;
    align-items: center;
    background-color: var(--backgroundColor);
    color: white;
    position: absolute;
    box-shadow: #ffa200 -1px 0px 14px -7px;
  }

  .icon {
    font-size: 20px;
    margin: 22px 0px;
    color: white;
    border: 1px solid #ffa200;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .${(props)=>props.visit}{
    background-color: #ffa200;
  }

  .info {
    position: absolute;
    font-size: 11px;
    background-color: #ffa200;
    scale: 0;
    border-radius: 7px;
    transition: all .2s;
    right: -9px;
    text-align: center;
  }


  .icon:hover .info {
    padding: 4px;
    display: block;
    right: 55px;
    font-weight: bold;
    scale: 1;
  }
`;

export default Sidebar;
