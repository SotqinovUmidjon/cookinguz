import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./pages/Create";
import NavbarBottom from "./components/NavbarBottom";
import Main from "./pages/Main";
import Recipe from "./pages/Recipe";
import { ThemeContext } from "./context/ChangeThemeContext";
import { useContext } from "react";

function App() {
  const { mode } = useContext(ThemeContext);
  return (
    <div className={mode ? "App night" : "App"}>
      <BrowserRouter>
        <Navbar />
        <NavbarBottom />
        <Routes>
          <Route path="/create" element={<Create />} />
          <Route path="/" element={<Main />} />
          <Route path="/recipe/:id" element={<Recipe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
