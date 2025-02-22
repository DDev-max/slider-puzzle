import { renderHook } from '@testing-library/react';
import { useRandomArray } from './useRandomArray';

it('should return return an array with a given size', () => {
  const { result } = renderHook(useRandomArray, { initialProps: { size: 2 } });

  expect(result.current).toHaveLength(4);
  expect(result.current).toContain(1);
  expect(result.current).toContain(2);
  expect(result.current).toContain(3);
  expect(result.current).toContain(4);
});

it('should generate a new array when "refresh" changes', () => {
  let refresh = 1;
  const { result, rerender } = renderHook(useRandomArray, { initialProps: { size: 10, refresh } });
  const firstResult = result.current;

  refresh++;
  rerender({ size: 10, refresh });
  const secondResult = result.current;

  expect(firstResult).not.toEqual(secondResult);
});
