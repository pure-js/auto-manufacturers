import { getEmojiFlagByISO } from './getEmojiFlagByISO';

test('Getting correct emoji flag by ISO country code', () => {
  expect(getEmojiFlagByISO('US')).toBe('πΊπΈ');
  expect(getEmojiFlagByISO('CH')).toBe('π¨π­');
});
