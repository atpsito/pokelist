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
        console.log(entry.isIntersecting);
        if (entry.isIntersecting) fetchNextPage();
      },
      { rootMargin: "300px" }
    );
    if (!ref.current) return;
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [fetchNextPage]);

  return (
    <div className="Home flex flex-col flex-1">
      <PokemonList pokemonList={data} />
      <div ref={ref} className="observer bg-red-500 w-full" />
    </div>
  );
};

export default Home;
