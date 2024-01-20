import { renderItems } from './view.js';
import { sortData } from './dataFunctions.js';

import data from './data/dataset.js';

const movieCard = document.getElementById("root");
const btnLimpar = document.getElementById("btn-limpar");
const order = document.getElementById("order");

const limparFunction = () => {
  console.log("Vai limpar filtro");
}

document.addEventListener("DOMContentLoaded", () => {
  movieCard.appendChild(renderItems(data));

  btnLimpar.addEventListener("click", limparFunction);

})


order.addEventListener("change", (e) => {
  console.log(e.target.value);
})
