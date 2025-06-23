import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./layout";
import Home from "./views/home";
import About from "./views/about";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
