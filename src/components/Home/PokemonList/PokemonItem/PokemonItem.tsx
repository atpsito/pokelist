"use client";
import React from "react";
import Image from "next/image";

import { PokemonItemProps as Props } from "./PokemonItem.types";
import { useFetchPokemonSpecies } from "@/services/pokeapi/pokeapi.service.hooks";
import { useFetchPokemonAbilities } from "@/services/pokeapi/pokeapi.service.hooks";
import { useFetchPokemonByUrl } from "@/services/pokeapi/pokeapi.service.hooks";
import { twMerge } from "tailwind-merge";
import { motion, useMotionValue, useTransform } from "framer-motion";

const PokemonItem = (props: Props) => {
  const { pokemonItem } = props;
  const { url, name } = pokemonItem;
  const { data: pokemon, isLoading } = useFetchPokemonByUrl(url);
  const { sprites, abilities, stats, types } = pokemon ?? {};
  const abilitiesComplete = useFetchPokemonAbilities(abilities ?? []);
  const { other } = sprites ?? {};
  const { "official-artwork": officialArtwork } = other ?? {};
  const { data: specie } = useFetchPokemonSpecies(pokemon?.species);
  const { color } = specie ?? {};
  const { name: colorName = "transparent" } = color ?? {};
  const x = useMotionValue(200);
  const y = useMotionValue(200);

  const rotateX = useTransform(y, [0, 300], [20, -20]);
  const rotateY = useTransform(x, [0, 400], [-20, 20]);

  const handleMouse: React.MouseEventHandler<HTMLDivElement> = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();

    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  };

  if (isLoading) return null;

  return (
    <motion.div
      className={twMerge(
        `PokemonItem border-[12px] border-neutral-700 p-6 rounded group`
      )}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { delay: 0.5, duration: 1 } }}
      viewport={{ once: true }}
      style={{
        rotateX,
        rotateY,
      }}
      whileHover={{
        scale: 1.03,
        borderColor: colorName,
      }}
      onMouseMove={handleMouse}
      onMouseLeave={() => {
        rotateX.set(0);
        rotateY.set(0);
        y.set(200);
        x.set(200);
      }}
    >
      <p className="text-2xl capitalize font-bold">{name}</p>
      <div className="relative">
        <Image
          src={officialArtwork?.front_default ?? ""}
          alt={name}
          width={200}
          height={200}
        />
      </div>
      <div>
        {stats?.map((stat) => {
          const { base_stat, stat: statData } = stat;
          const { name } = statData;
          return (
            <div key={name} className="flex justify-between">
              <p className="capitalize">{name}:</p>
              <p className="font-bold">{base_stat}</p>
            </div>
          );
        })}
      </div>
      <div className="my-2 h-[1px] bg-neutral-600" />
      <div className="flex flex-col gap-4">
        {abilitiesComplete.map((ability, index) => {
          const { data } = ability;
          const { name, flavor_text_entries } = data ?? {};
          const { flavor_text } =
            flavor_text_entries?.find(
              (entry) => entry.language.name === "en"
            ) ?? {};
          return (
            <div key={index} className="gap-1 flex flex-col">
              <p className="capitalize font-bold">{name}</p>
              <p className="pl-4">{flavor_text ?? "No description"}</p>
            </div>
          );
        })}
      </div>
      <div className="my-2 h-[1px] bg-neutral-600" />
      <div className="flex gap-2 flex-wrap pt-2">
        {types?.map((type) => {
          const { type: typeData } = type;
          const { name } = typeData;
          return (
            <div
              key={name}
              className="capitalize border border-white py-1 px-2 rounded-full"
            >
              {name}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default PokemonItem;
