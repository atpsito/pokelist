import { Ability } from "@/types/ability.types";
import { Pokemon, PokemonList } from "@/types/pokemon.types";
import { Specie } from "@/types/specie.types";
import { FetchPaginatedProps } from "./pokeapi.service.types";

export const fetchPokemon = async (
  props: FetchPaginatedProps
): Promise<PokemonList> => {
  const { pageParam } = props;
  const { url } = pageParam;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const fetchPokemonByUrl = async (url: string): Promise<Pokemon> => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const fetchPokemonAbility = async (url: string): Promise<Ability> => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const fetchPokemonSpecie = async (url: string): Promise<Specie> => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
