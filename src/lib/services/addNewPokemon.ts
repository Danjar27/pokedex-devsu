import {TableRowType} from "../../models/table.interfaces";
import {PokemonPostRequest} from "../../models/pokemon.interface";

export const addPokemon = async (
  data: Partial<PokemonPostRequest>|TableRowType
):Promise<PokemonPostRequest> => {
  const response = await fetch("https://pokemon-pichincha.herokuapp.com/pokemons/", {
    method: 'POST',
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