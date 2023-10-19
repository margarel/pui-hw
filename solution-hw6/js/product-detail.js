/* Populating drop down menu & changing page to match the cinnamon roll */

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get("roll");

/* Changes the title of the page to match the product name */
const headerElement = document.querySelector("#type");
headerElement.innerText = rollType + " Cinnamon Roll";

/* Changes the image to match the correct product */
const rollImage = document.querySelector("#roll-image");
let rollName = rollType.toLowerCase();
rollImage.src = "./../assets/products/" + rollName + "-cinnamon-roll.jpg";

/* Populates the HTML dropdown with the options based on dropdown ID */
function populateDropdown(id, options) {
    let dropdown = document.getElementById(id);
    options.forEach((option) => {
        let optionElement = document.createElement("option");
        optionElement.textContent = option.name;
        optionElement.value = option.price;
        dropdown.appendChild(optionElement);
    });

    /* Updates the dropdown change for console output */
    dropdown.addEventListener("change", () => {
        const selectedOption = dropdown.options[dropdown.selectedIndex].textContent;
    })
}

populateDropdown("glazing", glazingOptions);
populateDropdown("pack-size", packSizeOptions);

/* Checking if the cinnamon roll flavor is the selected one, then assign correct base price */
const rollsArray = Object.entries(rolls);
let type;
let basePrice;

for (let i = 0; i < rollsArray.length; i++) {
    type = rollsArray[i][0];
    if (type == rollType) {
        basePrice = rollsArray[i][1].basePrice;
        break;
    }
}

document.getElementById("total-price").textContent = "$ " + basePrice;

/* Updates the price on change of dropdown selection */
function updatePrice() {

    /* https://www.w3schools.com/jsref/jsref_number_parsefloat.asp */
    let glazingPrice = parseFloat(document.getElementById("glazing").value);
    let packPrice = parseFloat(document.getElementById("pack-size").value);

    let total = (basePrice + glazingPrice) * packPrice;

    /* https://www.w3schools.com/jsref/jsref_tofixed.asp */
    document.getElementById("total-price").textContent = "$ " + total.toFixed(2); // toFixed --> to the second decimal place
}

const glazeSelect = document.getElementById("glazing");
glazeSelect.addEventListener("change", updatePrice);

const packSelect = document.getElementById("pack-size");
packSelect.addEventListener("change", updatePrice);


/* TODO: Check if the cart exists */
let cart = [];

class Roll {
    constructor(rollType, glazeSelect, packSelect, basePrice) {
        this.type = rollType;
        this.glazing = glazeSelect;
        this.size = packSelect;
        this.basePrice = basePrice;
    }
}

const cartButton = document.getElementById("btn-cart");
cartButton.addEventListener("click", addToCart);

/* Pushes cinnamon roll info & selected options into console */
function addToCart() {
    let glazingId = document.getElementById("glazing");
    let glazingSelected = glazingId.options[glazingId.selectedIndex].textContent;

    let packID = document.getElementById("pack-size");
    let packSelected = packID.options[packID.selectedIndex].textContent;

    /* TODO: Convert the updated cart to JSON -> save in local storage -> print -> add to cart */
    const newRoll = new Roll(rollType, glazingSelected, packSelected, basePrice);
    cart.push(newRoll);

    console.log(cart);

    saveToLocalStorage();
}

function saveToLocalStorage() {
    const cartJSON = JSON.stringify(cart);

    console.log(cartJSON);
    // Save the JSON string in local storage
    localStorage.setItem("cart", cartJSON);
}

function retrieveFromLocalStorage() {
    const cartJSON = localStorage.getItem("cart");

    if (cartJSON) {
        cart = JSON.parse(cartJSON);
    }
}

if (localStorage.getItem("cart") != null) {
    retrieveFromLocalStorage();
}