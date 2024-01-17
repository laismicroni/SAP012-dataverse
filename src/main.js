import { Filtros } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

const movieCard = document.getElementById("root");
movieCard.appendChild(renderItems(data));

//Filtros
const limparBotao = document.getElementById("#btn-limpar");

//Função para atualizar os Filtros
const atualizarFiltros = () => {
  movieCard.innerHTML = "";
  movieCard.appendChild(renderItems(Filtros));

  // Atualizar ou limpar o botão de limpar
  limparBotao.addEventListener("click", atualizarFiltros);
}
limparBotao.addEventListener("click", atualizarFiltros);
