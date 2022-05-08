const toLamaCase = (txt) => {
  const arr = txt.split(' ');
  return arr.map((x) => x.toLowerCase()).join(' ');
};

export { toLamaCase };
