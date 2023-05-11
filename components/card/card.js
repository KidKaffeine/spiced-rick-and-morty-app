export function createCharacterCard(characterData) {

    const cardContainer = document.createElement('ul');
    const card = document.createElement.apply('li'); 
    
    const cardImageContainer = document.createElement('div');
    const cardImage = document.createElement('img'); 
    cardImage.setAttribute(src, "image link from API")

    
    const cardImageGradient = document.createElement('div');
    const cardContent = document.createElement('div'); 
    
    const cardTitle = document.createElement('h2');
    cardTitle.innerHTML = "Pickle Rick"
    
    const cardInfo = document.createElement('dl');
    
    const cardInfoTitleStatus = document.createElement('dt');
    cardInfoTitleStatus.innerHTML = "Status"
    const cardInfoDescriptionStatus = document.createElement('dd');
    cardInfoDescriptionStatus.innerHTML = "API variable"
    
    const cardInfoTitleType = document.createElement('dt');
    cardInfoTitleType.innerHTML = "Type"
    const cardInfoDescriptionType = document.createElement('dd');
    cardInfoDescriptionType.innerHTML = "API variable"
    
    const cardInfoTitleOccurences = document.createElement('dt');
    cardInfoTitleOccurences.innerHTML = "Occurences"
    const cardInfoDescriptionOccurences = document.createElement('dd');
    cardInfoDescriptionOccurences.innerHTML = "API variable"
    
}



