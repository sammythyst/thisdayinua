/*load card images, names, numbers from JSON, searchable in search bar*/
const cardList = document.getElementById('cardList');
const searchBar = document.getElementById('searchBar');
const cardPopup = document.getElementById("cardPopup");
let reCards = [];

searchBar.addEventListener('keyup', (e) => {
	const searchString = e.target.value.toLowerCase();
	
	//convert name to lowercase then compare
	const filteredCards = reCards.filter(card => {
		return (
			card.name.toLowerCase().includes(searchString) || 
			card.number.includes(searchString)
		);
	});
	displayCards(filteredCards);
});

window.addEventListener('click', (event) => {
    //If we click off the modal box, close it
    if (event.target.closest("#cardPopup") == null) {
        cardPopup.style.display = "none";
    }
});

const loadCards = async () => {
    try {
        const res = await fetch('tradingcards.json');
        reCards = await res.json();
        displayCards(reCards);
    } catch (err) {
        console.error(err);
    }
};

const displayCards = (cards) => {
    const htmlString = cards
        .map((card) => {
            return `
            <li class="card" onclick="displayCardPopupForElem(this)" data-cardid="${card.number}">
                <img src="${card.image}?size=small"></img>
            </li>
        `;
        })
        .join('');
    cardList.innerHTML = htmlString;
};

const findCard = (cardId) => {
    return reCards.find(card => card.number == cardId);
}

const displayCardPopupForId = (cardId, showAlt) => {
    //Get the card object
    var card = findCard(cardId);

    //Set the card image on the card popup box
    var cardImage = cardPopup.querySelector(".cardPopupImage");
    if (showAlt && card.altImage) {
        cardImage.setAttribute("src", card.altImage);
    } else {
        cardImage.setAttribute("src", card.image);
    }

    //Set the title
    var cardTitle = cardPopup.querySelector(".cardPopupName");
    cardTitle.innerHTML = card.name;
	
	//Set the card info
    var cardInfo = cardPopup.querySelector(".cardPopupInfo");
    if (showAlt && card.altInfo) {
        cardInfo.innerHTML = card.altInfo;
    } else {
        cardInfo.innerHTML = card.info;
    }
	
    //Set the current card id for the card popup box
    cardPopup.setAttribute("data-cardid", cardId);
    cardPopup.setAttribute("data-altcard", showAlt);

    //Show the box
    cardPopup.style.display = "block";

    //Don't let the main click handler immediately hide the box
    event.stopPropagation();
}

const displayCardPopupForElem = (elem) => {
    //Find the main card element
    var topElem = elem.closest(".card");

    //Get the card we clicked in
    var cardId = topElem.getAttribute("data-cardid");

    displayCardPopupForId(cardId, false);
}

const hideCardPopup = () => {
    //Hide the box
    cardPopup.style.display = "none";
}

const toggleAltCard = (elem) => {
    //Get the current card
    var cardId = cardPopup.getAttribute("data-cardid");
    var isAlt = cardPopup.getAttribute("data-altcard");

    //String to boolean
    isAlt = String(isAlt).toLowerCase() == "true";

    displayCardPopupForId(cardId, !isAlt);
}

loadCards();