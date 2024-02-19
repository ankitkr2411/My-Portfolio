import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import Sidebar from "./Sidebar";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import { useEffect, useState } from "react";
import Experience from "./Experience";

function App() {

  const [visit,setvisit] = useState("home");

  
  useEffect(()=>{

    let url = window.location.href;
    let page = url.substring(url.lastIndexOf("/")+1);

    if(page === "home")
    {
      setvisit("home");
    }
    else if(page === "about")
    {
      setvisit("about");
    }
    else if(page === "skills")
    {
      setvisit("skill");
    }
    else if(page === "experience")
    {
      setvisit("exper");
    }
    else if(page === "contact")
    {
      setvisit("contact");
    }
    

  },[]);


  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Sidebar visit={visit} setvisit={setvisit} />
        <Routes>
          <Route path="/" element={<Home setvisit={setvisit} />}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/skills" element={<Skills/>}/>
          <Route path="/experience" element={<Experience/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
