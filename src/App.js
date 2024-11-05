import { useState } from "react";
import Header from "./components/header";
import Menu from "./components/menu";
import { useLocation, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Shorts from "./pages/shorts";
import Inscricoes from "./pages/inscricoes";
import Music from "./pages/music";
import Voce from "./pages/voce";
import Downloads from "./pages/downloads";
import { UserStorage } from "./context/userContext";
import Login from "./pages/login";



function App() {

  const [openMenu , setOpenMenu] = useState(false);
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  return (
    <UserStorage>
      
          <div className="App">
          {!isLoginPage && <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />}
          <div style={{ width:'100%', display:'flex' }}>
            {!isLoginPage && <Menu openMenu={openMenu} />}

            <div style={{ width: '100%' , padding: '50px 70px' , boxSizing: 'border-box'}}>
              <Routes>
                <Route path='/' element={<Home openMenu={openMenu} />} />
                <Route path='/shorts'element={<Shorts />} />
                <Route path='/inscricoes'element={<Inscricoes />} />
                <Route path='/music'element={<Music />} />
                <Route path='/voce'element={<Voce />} />
                <Route path='/downloads'element={<Downloads />} />
                <Route path='/login'element={<Login />} />
              </Routes>
            </div>
          </div>

        </div>
      
    </UserStorage>

  );
}

export default App;
