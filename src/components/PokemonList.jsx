import React from "react";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemon }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
      {pokemon.map((poke) => (
        <PokemonCard key={poke.name} name={poke.name} url={poke.url} />
      ))}
    </div>
  );
};

export default PokemonList;
