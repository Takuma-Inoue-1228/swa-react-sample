import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header.jsx";
import { Top } from "./components/Top.jsx";
import { About } from "./components/About.jsx";
import { Count } from "./components/CountPage.jsx";
import { TestPage } from "./components/TestPage.jsx";
import { TestHooksPage } from "./components/TestHooksPage.jsx";
import { TodoPage } from "./components/TodoList.jsx";
import { NotFound } from "./components/404.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={"/"} element={<Top />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/count"} element={<Count />} />
        <Route path={"/test"} element={<TestPage />} />
        <Route path={"/test_hooks"} element={<TestHooksPage />} />
        <Route path={"/todo"} element={<TodoPage />} />
        <Route path={"*"} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;