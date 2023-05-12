const searchBarContainer = document.querySelector('[data-js="search-bar-container"]');

export function createSearchBar(onSubmit) {
    //Create
    const searchBar = document.createElement("form");
    searchBar.classList.add("search-bar");
    searchBar.setAttribute("data-js", "search-bar")
    searchBar.onsubmit = onSubmit;

    const query = document.createElement("input");
    query.name = "query";
    query.classList.add("search-bar__input");
    query.type = "text";
    query.placeholder = "search characters";
    query.setAttribute("aria-label", "character name");

    const searchBarButton = document.createElement("button");
    searchBarButton.classList.add("search-bar__button");
    searchBarButton.setAttribute("aria-label", "search for name");

    const searchBarIcon = document.createElement("img");
    searchBarIcon.classList.add("search-bar__icon");
    searchBarIcon.setAttribute("src", "assets/magnifying-glass.png");
    searchBarIcon.setAttribute("alt", "");

    //Append
    searchBarContainer.append(searchBar);
    searchBar.append(query);
    searchBar.append(searchBarButton);
    searchBarButton.append(searchBarIcon);
}