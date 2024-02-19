import React from 'react'
import styled from 'styled-components'
import contactbg from "./images/contactbg.jpg"
import { BiLogoGmail } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
import { TfiLinkedin } from "react-icons/tfi";

const Contact = () => {
  return (
    <Wrapper contactbg={contactbg}>
      <div className='bg'></div>
      <div className='main'>
        <div className='head'><span className='cont'>Contact</span> Me</div>
        <div className='inner'>
          <div className='link'><span className='logo'><BiLogoGmail /></span> ankitkr2411@gmail.com</div>
          <div className='link'><span className='logo'><FaPhoneAlt /></span> +91-7004741510</div>
          <div className='link'><span className='logo'><TfiLinkedin /></span> <a href='https://www.linkedin.com/in/akr2411/' target='_blank' rel="noreferrer">/ankitkr2411(Click Me)</a></div>
        </div>
      </div>
    </Wrapper>
  )
}


const Wrapper = styled.section`

.bg{
  position:relative;
  background-image: url("${(props)=>props.contactbg}");
  background-repeat:no-repeat;
  background-position: center;
  background-size:cover;
  height:100vh;
  width:100%; 
}

// .bg::after{
//   position:absolute;
//   content:"";
//   top:0px;
//   height:100%;
//   width:100%;
// }

.main{
  position: absolute;
  top:0;
  width:100%;
  height:100%;
  display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    align-items: center; 
    color:white;
}

.head{
  font-weight: bold;
  font-size: 43px;
  letter-spacing: 6px;
  margin-bottom: 46px;
  border: 1px solid rgb(255,255,255,0.2);
  padding: 10px;
  border-radius: 14px;
  backdrop-filter: blur(3px);
}

.cont{
  color:var(--color);
}

.inner{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.link{
  border: 1px solid rgb(255,255,255,0.2);
    padding: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 14px;
    backdrop-filter: blur(3px);
    margin: 0px 35px;

}

.logo{
  color: var(--backgroundColor);
    background-color: var(--color);
    font-size: 18px;
    padding: 7px 7px 4px 7px;
    border-radius: 18px;
    margin-right: 6px;
}

a{
  color:white;
}





`

export default Contact