const navigation = document.querySelector('[data-js="navigation"]');

export function createPagination(page, maxPage) {
    const pagination = document.createElement("span");
    pagination.classList.add("navigation__pagination");
    pagination.setAttribute("data-js", "pagination");
    pagination.innerText = `${page} / ${maxPage}`;

    navigation.append(pagination);
}

/* <span class="navigation__pagination" data-js="pagination">1 / 1</span> */