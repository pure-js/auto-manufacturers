export async function getManufacturers(page = 1, format = 'json') {
  const domain = 'https://vpic.nhtsa.dot.gov';
  const endpoint = 'getallmanufacturers';
  const args = `format=${format}&page=${page}`;
  const url = `${domain}/api/vehicles/${endpoint}?${args}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return await res.json();
}
