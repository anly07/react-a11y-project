import { describe, test, expect } from 'vitest';
import { stringCalculator } from './stringCalculator';

describe('stringCalculator', () => {
  test('returns 0 for an empty string', () => {
    expect(stringCalculator('')).toBe(0);
  });

  test('returns the number for a single number', () => {
    expect(stringCalculator('5')).toBe(5);
  });

});
