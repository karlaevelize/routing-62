import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Homepage = () => {
  //6. State variable to store the pokemons
  const [pokemons, setPokemons] = useState(null);

  //1. Write an async function
  const getPokemons = async () => {
    //2. Make a request with axios
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
    //3. Console.log the response
    // console.log("response pokemons", response);
    //7. Put pokemons in the state
    setPokemons(response.data.results);
  };

  //4. Declare useEffect
  useEffect(() => {
    //5. Call the function
    getPokemons();
  }, []);

  //8. Console.log state to see if data is there
  // console.log("pokemons in the state", pokemons);

  return (
    <div>
      <h2>Pokemon List</h2>
      {!pokemons
        ? "Loading"
        : pokemons.map((pokemon) => {
            return (
              <div key={pokemon.name}>
                <Link to={`/pokemon/${pokemon.name}`}>
                  <p>{pokemon.name}</p>
                </Link>
              </div>
            );
          })}
    </div>
  );
};
