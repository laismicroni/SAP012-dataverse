export function moviesFiltered(dataset, movieGender) {
  if(!movieGender){
    return dataset;
  }
}

export const filterData = (data, filterBy, value) => {
  const result = data.filter((item) => item.facts[filterBy].toLowerCase().includes(value));
  return result;
};

export const sortData = (data, sortBy, sortOrder) => {

  const orderMultiplier = sortOrder === 'asc' ? -1 : 1;

  data.sort((a, b) => {
    const valueA = a.facts[sortBy];
    const valueB = b.facts[sortBy];

    const numericValueA = parseFloat(valueA);
    const numericValueB = parseFloat(valueB);

    if (!isNaN(numericValueA) && !isNaN(numericValueB)) {
      return (numericValueA - numericValueB) * orderMultiplier;
    }
    if (!isNaN(numericValueA) && isNaN(numericValueB)) {
      return -1 * orderMultiplier;
    }
    if (numericValueA > numericValueB) {
      return 1 * orderMultiplier;
    }
    return 0;
  });

  return data;
};


export const computeStats = (data) => {
  const stats = data.map(item => item.facts.imDbRating).filter(value => !isNaN(value));
  const count = stats.reduce((accumulator) => accumulator + 1, 0);
  return count;
}
