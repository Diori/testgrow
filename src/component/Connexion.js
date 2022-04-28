import React from "react";
import Quizz from "./Quizz";
import "./Connexion.css";
import { NavLink, Route, Routes } from "react-router-dom";

function Connexion() {
  return (
    <div>
      <div className="contenue">
        <form>
          <h1 className="h1">Connexion</h1>
          <label>
            e-mail :
            <input type="mail" name="email" />
          </label>
          <label>
            Mots de passe :
            <input type="password" name="password" />
          </label>
          <input type="submit" value="Connecter" />
          <div className="ligne" />
          <label>
            connecter avec vos réseaux sociaux :
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="google">Google</option>
              <option value="facebook">FaceBook</option>
            </select>
          </label>
        </form>
      </div>
    </div>
  );
}

export default Connexion;
