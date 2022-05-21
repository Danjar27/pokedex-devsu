import '@testing-library/jest-dom';
import {removePokemon} from "../../../src/lib/services/removePokemon";

describe('remove pokemon service', () => {

  const basePage = 'https://pokemon-pichincha.herokuapp.com/pokemons/1';

  test('should exists', () => {
    expect(removePokemon).toBeDefined();
  });

  test('should be a function', () => {
    expect(removePokemon).toBeInstanceOf(Function);
  });

  test('should be a fetch call', async () => {
    const mockResponse = {};
    const mockFetch = jest.fn().mockResolvedValue({
      json: () => mockResponse
    });
    global.fetch = mockFetch;
    const pokemon = await removePokemon(1);
    expect(mockFetch).toHaveBeenCalledTimes(1);
    expect(mockFetch).toHaveBeenCalledWith(basePage, {method: 'DELETE'});
    expect(pokemon).toEqual(mockResponse);
  });
});
