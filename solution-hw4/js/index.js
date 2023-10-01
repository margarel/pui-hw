let cardId = "";
let a = 2;
let cart = [];

for (i = 0; i < rolls.length; i++) {
    cardId = document.getElementById((Object.keys(rolls)[i]).toLowerCase());
    cardId.addEventListener("click", navtoProductDetail(cardId));
}

console.log(a);
console.log(document.getElementById((Object.keys(rolls)[0]).toLowerCase()));

/* https://www.w3schools.com/js/js_window_location.asp */
function navtoProductDetail(cardId) {
    window.location.href = `product-detail.html?roll=${(cardId)}`; // idk if this works lowkey
}