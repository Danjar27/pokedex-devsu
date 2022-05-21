export type PokemonType =
  'normal'
  | 'fighting'
  | 'flying'
  | 'poison'
  | 'ground'
  | 'rock'
  | 'bug'
  | 'ghost'
  | 'steel'
  | 'fire'
  | 'water'
  | 'grass'
  | 'electric'
  | 'psychic'
  | 'ice'
  | 'dragon'
  | 'dark'
  | 'fairy';

export interface PokemonPostRequest {
  idAuthor: number;
  hp: number;
  name: string;
  type: PokemonType;
  image: string;
  attack: number;
  defense: number;
}