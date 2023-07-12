import { Countries } from './constants';

export function getEmojiFlagByISO(countryCode: string) {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(char =>  127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
}

export function getISObyCountryName(name: string): string {
  const ISO = new Intl.Locale('en', { baseName: name });
  return ISO;
}

export function formatName(name: string) {
  return name.split('(');
}

export function getFlagByCountryName(name: string) {
  const ISO = Countries.get(name.toLowerCase());
  console.log(ISO);
  return ISO ? getEmojiFlagByISO(ISO) : '';
}
