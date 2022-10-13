import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export const PokemonDetails = () => {
  const params = useParams();

  const [pokemon, setPokemon] = useState(null);

  // console.log("params", params);

  const getPokemon = async () => {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${params.name}`
    );
    console.log("response one pokemon", response);
    setPokemon(response.data);
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <div>
      <Link to="/">
        <p>Back to Homepage</p>
      </Link>
      {!pokemon ? (
        "Loading"
      ) : (
        <div>
          <h3>{pokemon.name}</h3>
          <img alt={pokemon.name} src={pokemon.sprites.front_default} />
        </div>
      )}
    </div>
  );
};
