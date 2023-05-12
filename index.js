import { createCharacterCard } from "./components/card/card.js";
import { createPrevButton, createNextButton } from "./components/nav-button/nav-button.js";
import { createPagination } from "./components/nav-pagination/nav-pagination.js";
import { createSearchBar } from "./components/search-bar/search-bar.js";


const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
/* const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]'); */


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
    /*     console.log(data) */

    maxPage = data.info.pages;

    navigation.innerHTML = "";
    searchBarContainer.innerHTML = "";

    //Create Components Functions

    createSearchBar((e) => {
      e.preventDefault();
      searchQuery = e.target.query.value;
      cardContainer.innerHTML = "";
      fetchData(page, searchQuery);
    });

    characters.forEach(character => {
      createCharacterCard(character)
    });

    createPrevButton(() => {
      if (page == 1) {
        return
      }
      else {
        page--;
        cardContainer.innerHTML = "";
        fetchData(page, searchQuery);
      }
    });

    createPagination(page, maxPage);

    createNextButton(() => {
      if (page == maxPage) {
        return
      }
      else {
        page++;
        cardContainer.innerHTML = "";
        fetchData(page, searchQuery);
      }
    });

  }
  catch (error) {
    console.log('error', error)
  }
}
//INITIAL FUNCTION CALL
fetchData(page, searchQuery)





