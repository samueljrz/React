import React, { Component } from "react";
import axios from 'axios'

class PokemonSearchWithClass extends Component {
  state = {
    imageUrl: "",
    name: "",
  };

  async componentDidMount() {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${this.props.pokedexNumber}/`)
    .then(response => {
      console.log(response)
      this.setState({ 
        imageUrl: response.data.sprites.front_default,
        name: response.data.name,  
      });
    })
    .catch(error => {
      console.log("Something went horribly wrong" + error);
    })
  }

  async componentDidUpdate() {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${this.props.pokedexNumber}/`)
    .then(response => {
      console.log(response)
      this.setState({ 
        imageUrl: response.data.sprites.front_default,
        name: response.data.name,  
      });
    })
    .catch(error => {
      console.log("Something went horribly wrong" + error);
    })
  }

  render = () => (
    <div>
      <h3>Using class component: </h3>
      <h3>Pokemon Name: </h3>
      <h4>{this.state.name}</h4>
      <h3>Pokemon Icon: </h3>
      <img alt="pokemon icon" src={this.state.imageUrl} />
    </div>
  );
}

export default PokemonSearchWithClass;
