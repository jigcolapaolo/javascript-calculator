import { describe, it, expect } from 'vitest';
import {
  isOperator,
  isHighOperator,
  isLowOperator,
  hasDoubleZero,
  verifyFirstInput,
  verifySecondInput
} from '../../src/utils/checkDigit';

describe('isOperator', () => {
  it('should return true for valid operators', () => {
    expect(isOperator('+')).toBe(true);
    expect(isOperator('-')).toBe(true);
    expect(isOperator('/')).toBe(true);
    expect(isOperator('X')).toBe(true);
    expect(isOperator('*')).toBe(true);
  });

  it('should return false for invalid characters', () => {
    expect(isOperator('1')).toBe(false);
    expect(isOperator('a')).toBe(false);
  });
});

describe('isHighOperator', () => {
  it('should return true for valid high priority operators', () => {
    expect(isHighOperator('X')).toBe(true);
    expect(isHighOperator('/')).toBe(true);
    expect(isHighOperator('*')).toBe(true);
  });

  it('should return false for other characters', () => {
    expect(isHighOperator('+')).toBe(false);
    expect(isHighOperator('-')).toBe(false);
    expect(isHighOperator('1')).toBe(false);
  });
});

describe('isLowOperator', () => {
  it('should return true for valid low priority operators', () => {
    expect(isLowOperator('+')).toBe(true);
    expect(isLowOperator('-')).toBe(true);
  });

  it('should return false for other characters', () => {
    expect(isLowOperator('*')).toBe(false);
    expect(isLowOperator('/')).toBe(false);
    expect(isLowOperator('1')).toBe(false);
  });
});

describe('hasDoubleZero', () => {
  it('should return true for strings with double zero', () => {
    expect(hasDoubleZero('00')).toBe(true);
  });

  it('should return false for strings without double zero', () => {
    expect(hasDoubleZero('0')).toBe(false);
    expect(hasDoubleZero('000')).toBe(false);
  });
});

describe('verifyFirstInput', () => {
  it('should handle the first input correctly', () => {
    expect(verifyFirstInput('5', '', '')).toBe('5');
    expect(verifyFirstInput('+', '', '')).toBe('+');
  });

  it('should return the last result if present and the operator is entered', () => {
    expect(verifyFirstInput('+', '10', '10')).toBe('10+');
  });

  it('should prevent double operators', () => {
    expect(verifyFirstInput('*', '5+', '')).toBe('5*');
    expect(verifyFirstInput('*', '5**', '')).toBe('5*');
  });
});

describe('verifySecondInput', () => {
  it('should handle inputs with the reset flag correctly', () => {
    expect(verifySecondInput('5', '10', '10', true)).toBe('5');
  });

  it('should prevent double decimal points', () => {
    expect(verifySecondInput('.', '5.5', '', false)).toBe('5.5');
  });
});
