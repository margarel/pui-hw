let cardId = "";
let cart = [];

/* Assigning the navigation link to the detail page for different cinnamon rolls */
for (i = 0; i < rolls.length; i++) {
    cardId = document.getElementById((Object.keys(rolls)[i]).toLowerCase()); // original, apple, etc.
    cardId.addEventListener("click", navtoProductDetail(cardId));
}

/* https://www.w3schools.com/js/js_window_location.asp */
function navtoProductDetail(cardId) {
    window.location.href = `product-detail.html?roll=${(cardId)}`; // changes link
}