import '@testing-library/jest-dom';
import {getAllPokemons} from "../../../src/lib/services/getAllPokemon";
import {TableRowType} from "../../../src/models/table.interfaces";

describe('get all pokemon service', () => {

  const basePage = 'https://pokemon-pichincha.herokuapp.com/pokemons/?idAuthor=1'

  test('should exists', () => {
    expect(getAllPokemons).toBeDefined();
  });

  test('should be a function', () => {
    expect(getAllPokemons).toBeInstanceOf(Function);
  });

  test('should be a fetch call', async () => {
    const mockResponse = {};
    const mockFetch = jest.fn().mockResolvedValue({
      json: () => mockResponse
    });
    global.fetch = mockFetch;
    const pokemon = await getAllPokemons();
    expect(mockFetch).toHaveBeenCalledTimes(1);
    expect(mockFetch).toHaveBeenCalledWith(basePage, {method: 'GET'});
    expect(pokemon).toEqual(mockResponse);
  });

  test('should return an array of TableRowType', async () => {
    const mockResponse: TableRowType[] = [{
      id: 1,
      name: 'bulbasaur',
      attack: 1,
      defense: 1,
      image: 'bulbasaur.png',
    }];
    global.fetch = jest.fn().mockResolvedValue({
      json: () => mockResponse
    });
    const pokemon = await getAllPokemons();
    expect(pokemon).toEqual(mockResponse);
  });

});
