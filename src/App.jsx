import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Top } from "./components/Top";
import { About } from "./components/About.jsx";
import { NotFound } from "./components/404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Top />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"*"} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
