import "./App.css";
import { Route, Routes, Link, NavLink } from "react-router-dom";
import Connexion from "./component/Connexion";
import Quizz from "./component/Quizz";
//import Quizz from "./component/Quizz";
//<></>

function App() {
  return (
    <div className="App">
      <div className="nav">
        <h2>Bienvenue à notre jeu</h2>
        <h3>
          <NavLink to="/tes" className="h3">
            Commencer ICI
          </NavLink>
        </h3>
      </div>
      <Routes>
        <Route path="/">
          <Route path="/tes" element={<Connexion />} />
          <Route path="/quizz" element={<Quizz />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
