const getPartialHTML = async (path) => {
  const partialMarkup = await fetch(path);

  return partialMarkup.text();
};

const concatPartialHTML = async () => {
  const markup = [];

  markup.push(await getPartialHTML('./part1.html'));
  markup.push(await getPartialHTML('./part2.html'));

  return markup.join('');
};

const injectHTML = async () => {
  const HTML = await concatPartialHTML();

  document.querySelector('#app').insertAdjacentHTML('beforeend', HTML);
};

injectHTML();
