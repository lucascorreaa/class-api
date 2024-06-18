import axios from "axios";
import { useState } from "react";

export default function GetPokemon() {
  const [pokemon, setPokemon] = useState("");
  const [pokedex, setPokedex] = useState("");

  async function handlePokedex() {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemon}`
      );
      setPokedex(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <div>
        <h1>Procure seu pokemon</h1>
        <input type="text" onChange={(e) => setPokemon(e.target.value)} />
        <button onClick={handlePokedex}>Eu escolho vc!</button>
      </div>
      {pokedex && (
        <div>
          <p>{pokedex.name}</p>
          <img src={pokedex.sprites.front_default} />
        </div>
      )}
    </div>
  );
}
