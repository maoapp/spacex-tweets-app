import { normalizeDate } from './utils';

describe('normalizeDate', () => {
  test('should correctly normalize a valid date string', () => {
    const date = '2024-11-06T14:23:00Z';
    const result = normalizeDate(date);
    expect(result).toBe('2024-11-06');
  });

  test('should correctly handle single-digit month and day', () => {
    const date = '2024-01-05T10:00:00Z';
    const result = normalizeDate(date);
    expect(result).toBe('2024-01-05');
  });

  test('should correctly handle a different time zone offset', () => {
    const date = '2024-11-06T14:23:00+05:00';
    const result = normalizeDate(date);
    expect(result).toBe('2024-11-06'); // Date should remain normalized to the original string
  });

  test('should handle invalid date strings gracefully', () => {
    const date = 'invalid-date';
    const result = normalizeDate(date);
    expect(result).toBe('NaN-NaN-NaN'); // Invalid date will produce a NaN string
  });
});
