import React from "react";
import { BrowserRouter, Route, Switch, HashRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Search from "./SearchPokemon/SearchPokemon";
import PokemonsList from "./PokemonsList/PokemonsList";
import Pokemon from "./Pokemon/Pokemon";
import Alert from "./Alert/Alert";
import NotFound from "./NotFound/NotFound";
import icon from "../src/assets/icon.png";
import styled from "styled-components";

const img = styled.img`
  width: 50px;
  height: 50px;
`;


const App = () => (
  <BrowserRouter>
    <nav className="navbar navbar-light bg-light justify-content-between">
    <ul className="navbar-nav flex-row">
        <li className="nav-item active">
          <a className="nav-link" href="#">Home
            <span className="sr-only">(current)</span>
          </a>
        </li>
        <li>
          <img src="../src/assets/pokedex.jpg" alt=""/>
        </li>
      </ul>
      <h1>Pokedex</h1>
      
      <form className="form-inline">
        <Search />
        <Alert />
      </form>
    </nav>
    <div className="row mt-12">
      {/* <header className="row mt-12">
        <div className="col-md-6 offset-md-1">
          <Alert />
        </div>
        <div className="col-md-4 offset-md-1">
          <Search />
        </div>
      </header> */}
      <div className="col-12">
        <HashRouter>
        <Switch>
          <Route exact path="/" component={PokemonsList} />
          <Route path="/pokemon/:pokemonIndex" component={Pokemon} />
          <Route component={NotFound} />
        </Switch>
        </HashRouter>
      </div>
    </div>
  </BrowserRouter>
);

export default App;
