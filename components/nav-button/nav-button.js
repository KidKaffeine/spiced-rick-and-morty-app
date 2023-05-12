const navigation = document.querySelector('[data-js="navigation"]');

export function createPrevButton(onClick) {
    const buttonPrev = document.createElement("button");
    buttonPrev.classList.add("button");
    buttonPrev.classList.add("button--prev");
    buttonPrev.setAttribute("data-js", "button-prev");
    buttonPrev.innerText = "previous";
    buttonPrev.onclick = onClick;
    navigation.append(buttonPrev);

}

export function createNextButton(onClick) {
    const buttonNext = document.createElement("button");
    buttonNext.classList.add("button");
    buttonNext.classList.add("button--next");
    buttonNext.setAttribute("data-js", "button-next");
    buttonNext.innerText = "next";
    buttonNext.onclick = onClick;

    navigation.append(buttonNext);
}

/* <button class="button button--prev" data-js="button-prev">
previous
</button> */