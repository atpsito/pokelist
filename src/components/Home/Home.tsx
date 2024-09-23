"use client";
import { useFetchPokemon } from "@/services/pokeapi/pokeapi.service.hooks";
import React, { useEffect, useRef } from "react";
import PokemonList from "./PokemonList/PokemonList";

const Home = () => {
  const { data, fetchNextPage } = useFetchPokemon();
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) fetchNextPage();
      },
      { rootMargin: "-200px" }
    );
    if (!ref.current) return;
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [fetchNextPage]);

  return (
    <div className="Home flex flex-col flex-1">
      <PokemonList pokemonList={data} />
      <div className="observer" ref={ref} />
    </div>
  );
};

export default Home;
