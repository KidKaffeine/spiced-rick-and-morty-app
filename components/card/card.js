const main = document.querySelector('main');

export function createCharacterCard(characterName, characterStatus, imgSrc, speciesType) {   
    const cardContainer = document.createElement('ul');
    cardContainer.classList.add('card-container');

    const card = document.createElement('li'); 
    card.classList.add('card');
    
    const cardImageContainer = document.createElement('div');
    cardImageContainer.classList.add('card__image-container');

    const cardImage = document.createElement('img'); 
    cardImage.classList.add('card__image');
    cardImage.setAttribute("src", imgSrc)


    cardImage.classList.add('card__image');
    cardImage.setAttribute("src", imgSrc)

  
    const cardImageGradient = document.createElement('div');
    cardImageGradient.classList.add('card__image-gradient');

    const cardContent = document.createElement('div'); 
    cardContent.classList.add('card__content');
    
    const cardTitle = document.createElement('h2');
    cardTitle.classList.add('card__title');
    cardTitle.innerHTML = characterName

    
    const cardInfo = document.createElement('dl');
    cardInfo.classList.add('card__info');
    
    const cardInfoTitleStatus = document.createElement('dt');
    cardInfoTitleStatus.classList.add('card__info-title');
    cardInfoTitleStatus.innerHTML = "Status"

    const cardInfoDescriptionStatus = document.createElement('dd');
    cardInfoDescriptionStatus.classList.add('card__info-description');
    cardInfoDescriptionStatus.innerHTML = characterStatus

    
    const cardInfoTitleType = document.createElement('dt');
    cardInfoTitleType.classList.add('card__info-title');
    cardInfoTitleType.innerHTML = "Type"

    const cardInfoDescriptionType = document.createElement('dd');
    cardInfoDescriptionType.classList.add('card__info-description');
    cardInfoDescriptionType.innerHTML = speciesType
    
    const cardInfoTitleOccurences = document.createElement('dt');
    cardInfoTitleOccurences.classList.add('card__info-title');
    cardInfoTitleOccurences.innerHTML = "Occurences"


    const cardInfoDescriptionOccurences = document.createElement('dd');
    cardInfoDescriptionOccurences.classList.add('card__info-description');
    cardInfoDescriptionOccurences.innerHTML = ""


    main.append(cardContainer);
    cardContainer.append(card);
    card.append(cardImageContainer);
    cardImageContainer.append(cardImage);
    cardImageContainer.append(cardImageGradient);
    card.append(cardContent);
    cardContent.append(cardTitle);
    cardContent.append(cardInfo);
    cardInfo.append(cardInfoTitleStatus);
    cardInfo.append(cardInfoDescriptionStatus);
    cardInfo.append(cardInfoTitleType);
    cardInfo.append(cardInfoDescriptionType);
    cardInfo.append(cardInfoTitleOccurences);
    cardInfo.append(cardInfoDescriptionOccurences);

}






