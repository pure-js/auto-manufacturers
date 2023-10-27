import { getEmojiFlagByISO, getISObyCountryName } from './getEmojiFlagByISO';

test('Getting correct emoji flag by ISO country code', () => {
  expect(getEmojiFlagByISO('US')).toBe('🇺🇸');
  expect(getEmojiFlagByISO('CH')).toBe('🇨🇭');
});
