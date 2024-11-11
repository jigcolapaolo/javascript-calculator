import { describe, it, expect } from 'vitest';
import { highPrecedence, lowPrecedence } from '../../src/utils/calculate';

describe('highPrecedence', () => {
  it('should evaluate expressions with multiplication and division', () => {
    expect(highPrecedence('2*3')).toBe('6');
    expect(highPrecedence('10/2')).toBe('5');
    expect(highPrecedence('4*5/2')).toBe('10');
  });

  it('should evaluate complex expressions with mixed operators', () => {
    expect(highPrecedence('2*3+4')).toBe('6+4');
    expect(highPrecedence('10/2-3')).toBe('5-3');
  });

  it('should handle negative numbers', () => {
    expect(highPrecedence('-2*3')).toBe('-6');
    expect(highPrecedence('10/-2')).toBe('-5');
  });

  it('should return the same string if there are no high precedence operators', () => {
    expect(highPrecedence('3+4')).toBe('3+4');
  });
});

describe('lowPrecedence', () => {
  it('should evaluate expressions with addition and subtraction', () => {
    expect(lowPrecedence('3+4')).toBe('7');
    expect(lowPrecedence('10-5')).toBe('5');
    expect(lowPrecedence('7+3-2')).toBe('8');
  });

  it('should handle negative numbers', () => {
    expect(lowPrecedence('-3+4')).toBe('1');
    expect(lowPrecedence('10+-5')).toBe('5');
  });

  it('should return the same string if there are no low precedence operators', () => {
    expect(lowPrecedence('2*3')).toBe('2*3');
  });
});

describe('Evaluation of complex expressions', () => {
  it('should evaluate a combination of high and low precedence operators', () => {
    const expression = '2*3+4/2-1';
    const resultHigh = highPrecedence(expression);
    const finalResult = lowPrecedence(resultHigh);
    expect(finalResult).toBe('7');
  });
});
