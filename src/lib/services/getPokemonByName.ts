import {TableRowType} from "../../models/table.interfaces";

export const getPokemonByName = async (
  name: string
):Promise<TableRowType[]|void> => {

  const page = `https://pokemon-pichincha.herokuapp.com/pokemons/?idAuthor=1&name=${name}`;

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