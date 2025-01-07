import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const PokemonCard = ({ name, url }) => {
  const [image, setImage] = useState("");

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setImage(data.sprites.front_default));
  }, [url]);

  return (
    <div
      style={{ border: "1px solid #ccc", padding: "1rem", textAlign: "center" }}
    >
      <img src={image} alt={name} style={{ width: "100px" }} />
      <h3>{name}</h3>
      <Link
        to={`/pokemon/${name}`}
        style={{ textDecoration: "none", color: "blue" }}
      >
        View Details
      </Link>
    </div>
  );
};

export default PokemonCard;
