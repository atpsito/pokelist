import { NameUrl } from "./common.types";

interface EvolutionChain {
  url: string;
}

interface FlavorTextEntry {
  flavor_text: string;
  language: NameUrl;
  version: NameUrl;
}

interface Genus {
  genus: string;
  language: NameUrl;
}

interface FormDescription {
  description: string;
  language: NameUrl;
}

interface Name {
  language: NameUrl;
  name: string;
}

interface PalParkEncounter {
  area: NameUrl;
  base_score: number;
  rate: number;
}

interface PokedexNumber {
  entry_number: number;
  pokedex: NameUrl;
}

interface Variety {
  is_default: boolean;
  pokemon: NameUrl;
}

export interface Specie {
  base_happiness: number;
  capture_rate: number;
  color: NameUrl;
  egg_groups: NameUrl[];
  evolution_chain: EvolutionChain;
  evolves_from_species: NameUrl | null;
  flavor_text_entries: FlavorTextEntry[];
  form_descriptions: FormDescription[];
  forms_switchable: boolean;
  gender_rate: number;
  genera: Genus[];
  generation: NameUrl;
  growth_rate: NameUrl;
  habitat: NameUrl;
  has_gender_differences: boolean;
  hatch_counter: number;
  id: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  name: string;
  names: Name[];
  order: number;
  pal_park_encounters: PalParkEncounter[];
  pokedex_numbers: PokedexNumber[];
  shape: NameUrl;
  varieties: Variety[];
}
