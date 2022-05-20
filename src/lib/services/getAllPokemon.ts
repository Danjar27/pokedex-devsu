import {TableRowType} from "../../models/table.interfaces";

const fetchPokemons = async ():Promise<TableRowType[]|void> => {
  try {
    return await fetch("https://pokemon-pichincha.herokuapp.com/pokemons/?idAuthor=1", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
  }catch (e) {
    console.log(e)
  }
}

export const getAllPokemons = async ():Promise<TableRowType[]> => {
  return await fetchPokemons() as TableRowType[]
}
