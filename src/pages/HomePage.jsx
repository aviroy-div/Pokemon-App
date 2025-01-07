import React, { useState, useEffect } from "react";
import PokemonList from "../components/PokemonList";
import SearchBar from "../components/SearchBar";

const HomePage = () => {
  const [pokemon, setPokemon] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=50")
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data.results);
        setFilteredPokemon(data.results);
      });
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = pokemon.filter((poke) =>
      poke.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPokemon(filtered);
  };

  return (
    <div>
      <div style={{ color: "green", padding: "1rem" }}>
        <h1>Welcome to the Pokémon App</h1>
      </div>
      <h1>Pokémon List</h1>
      <SearchBar onSearch={handleSearch} />
      <PokemonList pokemon={filteredPokemon} />
    </div>
  );
};

export default HomePage;
