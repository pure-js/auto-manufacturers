export const fetchManufacturers = () => {
  const domain = 'https://vpic.nhtsa.dot.gov';
  const endpoint = 'getallmanufacturers';
  const args = 'format=json&page=1';
  const url = `${domain}/api/vehicles/${endpoint}?${args}`;
  return fetch(url).then(data => data.json());
};
