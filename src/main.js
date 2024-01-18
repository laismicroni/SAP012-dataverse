// import { Filtros } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

const movieCard = document.getElementById("root");
const btnLimpar = document.getElementById("btn-limpar");

const limparFunction = () => {
  console.log("Vai limpar filtro");
}

document.addEventListener("DOMContentLoaded", () => {
  movieCard.appendChild(renderItems(data));

  btnLimpar.addEventListener("click", limparFunction);

})


