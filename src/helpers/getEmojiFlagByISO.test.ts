import { expect, test } from 'vitest';

import { getEmojiFlagByISO, getFlagByCountryName } from './getEmojiFlagByISO';

test('Getting correct emoji flag by ISO country code', () => {
  expect(getEmojiFlagByISO('US')).toBe('🇺🇸');
  expect(getEmojiFlagByISO('CH')).toBe('🇨🇭');
});

test('Getting correct emoji flag by ISO country code', () => {
  expect(getFlagByCountryName('Italy')).toBe('🇮🇹');
  expect(getFlagByCountryName('FRANCE')).toBe('🇫🇷');
});
