import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ComA.css";

const ComA = () => {
  const [num, setNum] = useState("1");
  const [name, setName] = useState("");
  const [moves, setMoves] = useState(0);
  const [image, setImage] = useState("");

  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
        setName(res.data.name);
        setMoves(res.data.moves.length);
        setImage(res.data.sprites.other["official-artwork"].front_default); // Get the official Pokémon image
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      }
    }
    getData();
  }, [num]); // Dependency ensures the data updates whenever `num` changes.

  return (
    <div className="pokemon-container">
      <h1 className="heading">Pokémon Info</h1>
      <div className="info">
        {image && <img src={image} alt={name} className="pokemon-image" />}
        <h2>
          You chose Pokémon number: <span>{num}</span>
        </h2>
        <h2>
          Name: <span>{name}</span>
        </h2>
        <h2>
          Total Moves: <span>{moves}</span>
        </h2>
      </div>
      <div className="selector">
        <label htmlFor="pokemon-select">Choose Pokémon:</label>
        <select
          id="pokemon-select"
          value={num}
          onChange={(e) => setNum(e.target.value)}
        >
          <option value="1">1</option>
          <option value="25">25</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
    </div>
  );
};

export default ComA;
