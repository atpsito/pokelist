import { NameUrl } from "./common.types";

export interface PokemonItem extends NameUrl {}

export interface PokemonList {
  count: number;
  next: string;
  previous: string;
  results: PokemonItem[];
}

export interface Pokemon {
  abilities: AbilitySlot[];
  base_experience: number;
  cries: Cries;
  forms: NameUrl[];
  game_indices: GameIndex[];
  height: number;
  held_items: HeldItem[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  past_abilities: unknown[];
  past_types: PastType[];
  species: NameUrl;
  sprites: Sprites;
  stats: Stat[];
  types: TypeSlot[];
  weight: number;
}

export interface AbilitySlot {
  ability: NameUrl;
  is_hidden: boolean;
  slot: number;
}

interface Cries {
  latest: string;
  legacy: string;
}

interface GameIndex {
  game_index: number;
  version: NameUrl;
}

interface HeldItem {
  item: NameUrl;
  version_details: VersionDetail[];
}

interface VersionDetail {
  rarity: number;
  version: NameUrl;
}

interface Move {
  move: NameUrl;
  version_group_details: VersionGroupDetail[];
}

interface VersionGroupDetail {
  level_learned_at: number;
  move_learn_method: NameUrl;
  version_group: NameUrl;
}

interface PastType {
  generation: NameUrl;
  types: TypeSlot[];
}

interface TypeSlot {
  slot: number;
  type: NameUrl;
}

interface Sprites {
  back_default: string;
  back_female: string | null;
  back_shiny: string;
  back_shiny_female: string | null;
  front_default: string;
  front_female: string | null;
  front_shiny: string;
  front_shiny_female: string | null;
  other: OtherSprites;
  versions: VersionSprites;
}

interface OtherSprites {
  dream_world: FrontSprites;
  home: FrontShinySprites;
  "official-artwork": FrontShinySprites;
  showdown: FrontShinySprites;
}

interface FrontSprites {
  front_default: string;
  front_female: string | null;
}

interface FrontShinySprites extends FrontSprites {
  front_shiny: string;
  front_shiny_female: string | null;
}

interface VersionSprites {
  "generation-i": GenerationSprites;
  "generation-ii": GenerationSprites;
  "generation-iii": GenerationSprites;
  "generation-iv": GenerationSprites;
  "generation-v": GenerationSprites;
  "generation-vi": GenerationSprites;
  "generation-vii": GenerationSprites;
  "generation-viii": GenerationSprites;
}

interface GenerationSprites {
  red_blue?: FrontSprites;
  yellow?: FrontSprites;
  crystal?: FrontSprites;
  gold?: FrontSprites;
  silver?: FrontSprites;
  emerald?: FrontShinySprites;
  firered_leafgreen?: FrontShinySprites;
  ruby_sapphire?: FrontShinySprites;
  diamond_pearl?: FrontShinySprites;
  heartgold_soulsilver?: FrontShinySprites;
  platinum?: FrontShinySprites;
  black_white?: AnimatedSprites;
}

interface AnimatedSprites extends FrontShinySprites {
  animated: FrontShinySprites;
}

interface Stat {
  base_stat: number;
  effort: number;
  stat: NameUrl;
}
