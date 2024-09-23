// Interfaces and types from component PokemonList

import { PokemonList } from "@/types/pokemon.types";
import { InfiniteData } from "@tanstack/react-query";

// Component Props
export interface PokemonListProps {
  pokemonList: InfiniteData<PokemonList, unknown> | undefined;
}
