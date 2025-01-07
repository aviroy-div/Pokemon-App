import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const PokemonDetails = () => {
  const { name } = useParams();
  const [details, setDetails] = useState(null);

  // Fetch Pokémon details
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => response.json())
      .then((data) => setDetails(data));
  }, [name]);

  const handleFavorite = () => {
    const favoritePokemon = {
      name: details.name,
      image: details.sprites.front_default,
    };

    // Get existing favorites from localStorage
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    // Add new favorite if it doesn't already exist
    if (!favorites.find((pokemon) => pokemon.name === details.name)) {
      favorites.push(favoritePokemon);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  };

  if (!details) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{details.name}</h1>
      <img src={details.sprites.front_default} alt={details.name} />
      <h2>Abilities</h2>
      <ul>
        {details.abilities.map((ability) => (
          <li key={ability.ability.name}>{ability.ability.name}</li>
        ))}
      </ul>
      <h2>Types</h2>
      <ul>
        {details.types.map((type) => (
          <li key={type.type.name}>{type.type.name}</li>
        ))}
      </ul>
      <h2>Base Stats</h2>
      <ul>
        {details.stats.map((stat) => (
          <li key={stat.stat.name}>
            {stat.stat.name}: {stat.base_stat}
          </li>
        ))}
      </ul>
      <button onClick={handleFavorite}>Add to Favorites</button>
    </div>
  );
};

export default PokemonDetails;
