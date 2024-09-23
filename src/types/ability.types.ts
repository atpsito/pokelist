import { NameUrl } from "./common.types";

interface EffectEntry {
  effect: string;
  language: NameUrl;
  short_effect: string;
}

interface FlavorTextEntry {
  flavor_text: string;
  language: NameUrl;
  version_group: NameUrl;
}

interface Name {
  language: NameUrl;
  name: string;
}

interface PokemonEntry {
  is_hidden: boolean;
  pokemon: {
    name: string;
    url: string;
  };
  slot: number;
}

export interface Ability {
  effect_changes: EffectEntry[]; // Cambiar si es necesario
  effect_entries: EffectEntry[];
  flavor_text_entries: FlavorTextEntry[];
  generation: NameUrl;
  id: number;
  is_main_series: boolean;
  name: string;
  names: Name[];
  pokemon: PokemonEntry[];
}
