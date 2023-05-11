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
let maxPage = 42;
let page = 2;
let searchQuery = "";

async function fetchData(page, searchQuery) {
  try {
    const apiUrl = `https://rickandmortyapi.com/api/character/?page=${page}&name=${searchQuery}`
    const response = await fetch(apiUrl);
    const data = await response.json();
    let characters = data.results
    console.log(characters)

    characters.forEach(character => {
      createCharacterCard(character)
    });
  }
  catch (error) {
    console.log('error', error)
  }
}

fetchData(page, searchQuery)

searchBar.addEventListener('submit', (event) => {
  event.preventDefault();
  searchQuery = event.target.elements.input.value;
  page = 1;
  fetchCharacters(searchQuery, page);
  event.target.reset();
  event.target.elements.input.focus();
});


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