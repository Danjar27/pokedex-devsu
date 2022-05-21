import {TableRowType} from "../../models/table.interfaces";

export const getPokemonByID = async (
  id: string
):Promise<TableRowType|void> => {

  const page = `https://pokemon-pichincha.herokuapp.com/pokemons/${id}`;

  try {
    return await fetch(page, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
  }catch (e) {
    console.log(e)
  }
}