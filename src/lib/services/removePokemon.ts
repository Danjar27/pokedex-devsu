import {PokemonPostRequest} from "../../models/pokemon.interface";

export const removePokemon = async (
  id: string|number
):Promise<PokemonPostRequest|any> => {

  const page = `https://pokemon-pichincha.herokuapp.com/pokemons/${id}`;

  const response = await fetch(page, {
    method: 'DELETE',
  });
  return response.json();
}