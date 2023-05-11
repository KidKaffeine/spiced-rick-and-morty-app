import { createCharacterCard } from "./components/card/card.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
let maxPage = 1;
let page = 1;
let searchQuery = "";

async function fetchData(page, searchQuery) {
  try {
    const apiUrl = `https://rickandmortyapi.com/api/character/?page=${page}&name=${searchQuery}`
    const response = await fetch(apiUrl);
    const data = await response.json();
    let characters = data.results
    console.log(data)

    characters.forEach(character => {
      createCharacterCard(character)
    });

    maxPage = data.info.pages;
    pagination.textContent = `${page} / ${maxPage}`;
  }
  catch (error) {
    console.log('error', error)
  }
}

fetchData(page, searchQuery)

searchBar.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchQuery = e.target.query.value;
  cardContainer.innerHTML = "";
  fetchData(page, searchQuery);
})


nextButton.addEventListener("click", () => {
  if (page == maxPage) {
    return
  }
  else {
    page++;
    cardContainer.innerHTML = "";
    fetchData(page, searchQuery);
  }
})

prevButton.addEventListener("click", () => {
  if (page == 1) {
    return
  }
  else {
    page--;
    cardContainer.innerHTML = "";
    fetchData(page, searchQuery);
  }
})