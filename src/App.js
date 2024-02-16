import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import Sidebar from "./Sidebar";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Education from "./Education";
import Contact from "./Contact";
import { useState } from "react";

function App() {

  const [visit,setvisit] = useState("home");


  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Sidebar visit={visit} setvisit={setvisit} />
        <Routes>
          <Route path="/" element={<Home setvisit={setvisit} />}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/skills" element={<Skills/>}/>
          <Route path="/education" element={<Education/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
