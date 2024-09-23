import { AbilitySlot } from "@/types/pokemon.types";
import { fetchPokemon, fetchPokemonSpecie } from "./pokeapi.service";
import { fetchPokemonAbility, fetchPokemonByUrl } from "./pokeapi.service";
import { useInfiniteQuery, useQueries, useQuery } from "@tanstack/react-query";
import { NameUrl } from "@/types/common.types";

export const useFetchPokemon = () => {
  return useInfiniteQuery({
    queryKey: ["pokemon"],
    queryFn: fetchPokemon,
    getNextPageParam: (lastPage) => ({
      url: lastPage.next,
    }),
    initialPageParam: {
      url: "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20",
    },
  });
};

export const useFetchPokemonByUrl = (url: string) => {
  return useQuery({
    queryKey: ["pokemon", url],
    queryFn: () => fetchPokemonByUrl(url),
  });
};

export const useFetchPokemonAbilities = (abilityies: AbilitySlot[]) => {
  return useQueries({
    queries: abilityies.map((item) => ({
      queryKey: ["pokemon", "ability", item.ability.name],
      queryFn: () => fetchPokemonAbility(item.ability.url),
    })),
  });
};

export const useFetchPokemonSpecies = (specie: NameUrl | undefined) => {
  return useQuery({
    queryKey: ["pokemon", "species", specie?.name ?? ""],
    queryFn: () => fetchPokemonSpecie(specie!.url),
    enabled: !!specie,
  });
};
