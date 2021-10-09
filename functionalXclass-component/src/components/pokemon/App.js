import React, { Component } from "react";
import "./styles.css";

//import PokemonFetchingComponent from "./ClassComponent";
import PokemonFetchingComponent from "./FunctionalComponent";

class App extends Component {
  state = {
    pokedexNumber: 151
  };

  render() {
    return (
      <div className="App">
        <h1>Pokédex Number #{this.state.pokedexNumber}</h1>
        <button
          type="button"
          onClick={() =>
            this.setState({
              pokedexNumber: Math.floor(Math.random() * 151) + 1
            })
          }
        >
          Random Pokemon Number
        </button>
        <PokemonFetchingComponent pokedexNumber={this.state.pokedexNumber} />
      </div>
    );
  }
}

export default App;
