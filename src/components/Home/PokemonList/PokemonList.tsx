"use client";
import React, { useMemo } from "react";

import { PokemonListProps as Props } from "./PokemonList.types";
import PokemonItem from "./PokemonItem/PokemonItem";
import { motion } from "framer-motion";

const PokemonList = (props: Props) => {
  const { pokemonList } = props;

  const pokemons = useMemo(
    () => pokemonList?.pages.map((page) => page.results).flat() ?? [],
    [pokemonList]
  );

  return (
    <motion.div className="PokemonList grid grid-flow-row grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
      {pokemons.map((pokemon) => (
        <PokemonItem key={pokemon.url} pokemonItem={pokemon} />
      ))}
    </motion.div>
  );
};

export default PokemonList;
