import React, { useState, useEffect } from "react";
import axios from 'axios'

const PokemonSearchWithFunction = props => {
  //states
  const [imageUrl, setImgUrl] = useState("");
  const [imageName, setImgName] = useState("");

  const axiosData = async () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${props.pokedexNumber}/`)
    .then(response => {
      setImgUrl(response.data.sprites.front_default);
      setImgName(response.data.name);
    })
    .catch(error => {
      console.log("Something went horribly wrong" + error);
    })
  };

  //DidMount and DidUpdate
  useEffect(() => {
    axiosData();
  }, []);

  return (
    <div>
      <h3>Using Functional component: </h3>
      <h3>Pokemon Name: </h3>
      <h4>{imageName}</h4>
      <h3>Pokemon Icon: </h3>
      <img alt="pokemon icon" src={imageUrl} />
    </div>
  );
};

export default PokemonSearchWithFunction;
