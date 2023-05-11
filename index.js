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
const maxPage = 1;
const page = 1;
const searchQuery = "";

// API Call

// export async function fetchData () {
//   try {
//        const apiUrl = "https://rickandmortyapi.com/api/character"
//        const response = await fetch(apiUrl); 
//        const data = await response.json();
//        let characters = data.results

      
//       characters.forEach(character => {



//           const characterName  = character.name;
//           console.log(characterName)

//           const imgSrc = character.image;

//           const characterStatus = character.status;

//           const characterType = character.type;

//           createCharacterCard(characterName, characterStatus, characterType, imgSrc)
//         });

//       // console.log(data.info.next) 
//       // console.log(data.info.prev)
//   } 

//   catch {
//       console.log('This is an error. Yay.')
//   }
// }

// fetchData();
createCharacterCard()

