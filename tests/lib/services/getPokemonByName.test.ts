import '@testing-library/jest-dom';
import {getPokemonByName} from "../../../src/lib/services/getPokemonByName";

describe('get Pokemon by name service', () => {

  const basePage = 'https://pokemon-pichincha.herokuapp.com/pokemons/?idAuthor=1&'

  test('should exist', () => {
    expect(getPokemonByName).toBeDefined();
  });

  test('should be a fetch call', async () => {
    const mockResponse = {};
    const mockFetch = jest.fn().mockResolvedValue({
      json: () => mockResponse
    });
    global.fetch = mockFetch;
    const pokemon = await getPokemonByName('test');
    expect(mockFetch).toHaveBeenCalledTimes(1);
    expect(mockFetch).toHaveBeenCalledWith(`${basePage}name=test`, {method: 'GET'});
    expect(pokemon).toEqual(mockResponse);
  });
});
