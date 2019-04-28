import { Greeter } from './index';

test('My Greeter', (): void => {
  expect(Greeter('A Name')).toBe('Hello A Name');
});
