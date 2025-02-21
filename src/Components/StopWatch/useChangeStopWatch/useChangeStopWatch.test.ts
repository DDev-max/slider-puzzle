import { renderHook } from '@testing-library/react';
import { useChangeStopWatch } from './useChangeStopWatch';

const setStopWatch = jest.fn();
const victory = false;

it('shouldnt change stopWatch if theres a victory', () => {
  jest.useFakeTimers();
  const victory = true;

  renderHook(useChangeStopWatch, { initialProps: { setStopWatch, victory } });
  jest.runOnlyPendingTimers();

  expect(setStopWatch).not.toHaveBeenCalled();
});

it('should change stopWatch every second', () => {
  jest.useFakeTimers();
  const intervalSpy = jest.spyOn(global, 'setInterval');

  renderHook(useChangeStopWatch, { initialProps: { setStopWatch, victory } });
  jest.runOnlyPendingTimers();

  expect(intervalSpy).toHaveBeenCalledWith(expect.any(Function), 1000);
  expect(setStopWatch).toHaveBeenCalled();
});
