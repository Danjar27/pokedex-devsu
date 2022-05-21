import '@testing-library/jest-dom';
import {updatePokemon} from "../../../src/lib/services/updatePokemon";

describe('remove pokemon service', () => {

  test('should exists', () => {
    expect(updatePokemon).toBeDefined();
  });

  test('should be a function', () => {
    expect(updatePokemon).toBeInstanceOf(Function);
  });

});
