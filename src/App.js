import { useLocation, Route, Routes } from "react-router-dom";
import { useAppContext } from "./contexts/menuContext";
import Header from "./components/header";
import Menu from "./components/menu";
import Home from "./pages/home";
import Shorts from "./pages/shorts";
import Inscricoes from "./pages/inscricoes";
import Music from "./pages/music";
import Voce from "./pages/voce";
import Downloads from "./pages/downloads";
import Login from "./pages/loginPage";
import Cadastro from "./sign-up/index";
import SearchPage from "./pages/search";
import SeusVideos from "./pages/yourVideos";

function App() {
  const { openMenu, setOpenMenu } = useAppContext();
  const location = useLocation();
  const isExcludedPage = location.pathname === "/login" || location.pathname === "/cadastro";

  return (
    <div className="App">
      {!isExcludedPage && <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />}
      <div style={{ width: "100%", display: "flex" }}>
        {!isExcludedPage && <Menu openMenu={openMenu} />}
        <div style={{ width: "100%", padding: "50px 70px", boxSizing: "border-box" }}>
          
          <Routes>
            <Route path="/" element={<Home openMenu={openMenu} />} />
            <Route path="/shorts" element={<Shorts />} />
            <Route path="/inscricoes" element={<Inscricoes />} />
            <Route path="/music" element={<Music />} />
            <Route path="/voce" element={<Voce />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/videos" element={<SeusVideos />} />


          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

