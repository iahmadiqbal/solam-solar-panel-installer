import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./layout";
import Home from "./views/home";
import About from "./views/about";
import Projects from "./views/projects";
import Services from "./views/services";
import OurTeam from "./views/ourteam";
import Contact from "./views/contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="services" element={<Services />} />
          <Route path="ourteam" element={<OurTeam />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
