import {TableRowType} from "../../models/table.interfaces";
import {PokemonPostRequest} from "../../models/pokemon.interface";

export const updatePokemon = async (
  id: string,
  data: Partial<PokemonPostRequest>|TableRowType
):Promise<PokemonPostRequest> => {

  const page = `https://pokemon-pichincha.herokuapp.com/pokemons/${id}`;


  const response = await fetch(page, {
    method: 'PUT',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...data,
      idAuthor: 1,
      type: 'normal',
      hp: 100
    }),
  });
  return response.json();
}