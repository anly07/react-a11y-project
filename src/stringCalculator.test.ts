import { describe, test, expect } from 'vitest';
import { stringCalculator } from './stringCalculator';

describe('stringCalculator', () => {
  test('returns 0 for an empty string', () => {
    expect(stringCalculator('')).toBe(0);
  });

  test('returns the number for a single number', () => {
    expect(stringCalculator('5')).toBe(5);
  });

  test('returns the sum for comma-separated numbers', () => {
    expect(stringCalculator('1,2,3')).toBe(6);
  });

  test('handles newline as separator', () => {
    expect(stringCalculator('1\n2,3')).toBe(6);
  });
});
