"use client";

import { useState } from "react";

type Pokemon = {
  name: string;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
  };
};

export default function Home() {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  async function searchPokemon() {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`
    );

    if (response.ok) {
      const data: Pokemon = await response.json();
      setPokemon(data);
    } else {
      alert("Pokemon not found");
      setPokemon(null);
    }
  }

  return (
    <main className="min-h-screen bg-gray-800 flex flex-col items-center p-10">
      <h1 className="text-4xl font-bold mb-6">Pokedex</h1>

      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Enter pokemon name"
          value={pokemonName}
          onChange={(e) => setPokemonName(e.target.value)}
          className="border border-gray-400 rounded px-4 py-2"
        />

        <button
          onClick={searchPokemon}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </div>

      {pokemon && (
        <div className="mt-8 bg-gray-700 border rounded-lg p-6 w-64 text-center shadow">
          <h2 className="text-2xl font-bold capitalize">{pokemon.name}</h2>

          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            className="mx-auto w-40 h-40"
          />

          <p>Height: {pokemon.height}</p>
          <p>Weight: {pokemon.weight}</p>
        </div>
      )}
    </main>
  );
}