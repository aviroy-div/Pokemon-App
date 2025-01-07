import React, { useState, useEffect } from "react";

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage on component mount
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  return (
    <div>
      <h1>Favorites</h1>
      {favorites.length === 0 ? (
        <p>No Pokémon favorited yet!</p>
      ) : (
        <ul>
          {favorites.map((pokemon, index) => (
            <li key={index}>
              <img
                src={pokemon.image}
                alt={pokemon.name}
                style={{ width: "50px" }}
              />
              {pokemon.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FavoritesPage;
