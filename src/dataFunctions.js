// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.
export const Filtros = () => {
  return 'Filtros';
};

export const anotherExample = () => {
  return [];
};


export const sortData = (data, sortBy, sortOrder) => {
  const orderMultiplier = sortOrder === 'asc' ? 1 : -1;

  data.sort((a, b) => {
    const valueA = a.facts[sortBy];
    const valueB = b.facts[sortBy];

    if (valueA < valueB) {
      return -1 * orderMultiplier;
    }
    if (valueA > valueB) {
      return 1 * orderMultiplier;
    }
    return 0;
  });

  return data;

};



