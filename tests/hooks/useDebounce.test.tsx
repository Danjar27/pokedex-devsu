import {renderHook} from "@testing-library/react";
import '@testing-library/jest-dom';
import useDebounce from "../../src/hooks/useDebounce";

describe('debounce hook', () => {

  test('should be defined', () => {
    expect(useDebounce).toBeDefined();
  });

  test('should return a string', () => {
    const {result} = renderHook(() => useDebounce('test'));
    expect(typeof result.current).toBe('string');
  });

  test('should return the same string', () => {
    const {result} = renderHook(() => useDebounce('test'));
    expect(result.current).toBe('test');
  });

  test('should return the same string after 500ms', async () => {
    const {result} = renderHook(() => useDebounce('test'));
    expect(result.current).toBe('test');
    await new Promise(resolve => setTimeout(resolve, 500));
    expect(result.current).toBe('test');
  });
});
