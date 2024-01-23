import { renderItems } from './view.js';
import { filterData, sortData, computeStats } from "./dataFunctions.js";
import data from './data/dataset.js';

const movieCard = document.querySelector("#root");
const btnLimpar = document.querySelector("#btn-limpar");
const order = document.querySelector("#order");
const filters = document.querySelector("#filters");
const titlesLength = document.querySelector(".titles_length");

let movieData = [...data];


document.addEventListener("DOMContentLoaded", () => {
  movieCard.appendChild(renderItems(data));
})


order.addEventListener("change", (e) => {
  const orderValue = e.target.value;
  movieData = sortData(movieData, "imDbRating", e.target.value);
  if (orderValue === "todos") {
    movieData = [...data];
  }
  else if (orderValue === "asc") {
    movieData = sortData(movieData, "imDbRating", "asc");
  }
  else {
    movieData = sortData(movieData, "imDbRating", "desc");
  }
  movieCard.innerHTML = "";
  movieCard.appendChild(renderItems(movieData));
  console.log(movieData);
})



filters.addEventListener("change", (e) => {
  const value = e.target.value;
  if (value === "Todos") {
    movieData = [...data];
  } else {
    movieData = filterData(data, "movieGender", value);
  }
  movieCard.innerHTML = "";
  movieCard.appendChild(renderItems(movieData));
})

const numberOfMovies = computeStats(data);
titlesLength.innerText = `${numberOfMovies} títulos`;
console.log(numberOfMovies);


 btnLimpar.addEventListener("click", () => {
  movieCard.innerHTML = "";
  movieCard.appendChild(renderItems(data)); 
 })