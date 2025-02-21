import { timeConversion } from './timeConversion';

it('should return time conversion', () => {
  const { minutes, seconds } = timeConversion(65);

  expect(minutes).toBe(1);
  expect(seconds).toBe(5);
});
