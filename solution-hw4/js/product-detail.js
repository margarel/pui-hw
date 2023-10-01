const queryString = window.location.search;
/* console.log(queryString); // ?=roll(blah blah blah) */

const params = new URLSearchParams(queryString);
/* console.log(params); // object */

const rollType = params.get("roll");
/* console.log(rollType); // Apple or like Double-Chocolate */

/* Changes the title of the page to match the product name */
const headerElement = document.querySelector("#type");
headerElement.innerText = rollType + " Cinnamon Roll";

/* Changes the image to match the correct product */
const rollImage = document.querySelector("#roll-image");
let rollName = rollType.toLowerCase();
rollImage.src = "../../assets/products/" + rollName + "-cinnamon-roll.jpg";
console.log(rollType);
console.log(rollImage.src);

/* All the glazing options */
const glazingOptions = [
    {name: "Keep original", price: 0.00},
    {name: "Sugar milk", price: 0.00},
    {name: "Vanilla milk", price: 0.50},
    {name: "Double chocolate", price: 1.50}
];

/* All the pack size options with their prices */
const packSizeOptions = [
    {name: "1", price: 1.00},
    {name: "3", price: 3.00},
    {name: "6", price: 5.00},
    {name: "12", price: 10.00}
];

/* Populates the HTML dropdown with the options based on dropdown ID */
function populateDropdown(id, options) {
    let dropdown = document.getElementById(id);
    options.forEach((option) => {
        let optionElement = document.createElement("option");
        optionElement.textContent = option.name;
        optionElement.value = option.price;
        dropdown.appendChild(optionElement);
    });

    dropdown.addEventListener("change", () => {
        const selectedOption = dropdown.options[dropdown.selectedIndex].textContent;
        /* console.log(selectedOption); */
    })
}

populateDropdown("glazing", glazingOptions);
populateDropdown("pack-size", packSizeOptions);





/* Checking if the cinnamon roll flavor is  */
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

function addToCart() {
    let glazingId = document.getElementById("glazing");
    let glazingSelected = glazingId.options[glazingId.selectedIndex].textContent;

    let packID = document.getElementById("pack-size");
    let packSelected = packID.options[packID.selectedIndex].textContent;

    const newRoll = new Roll(rollType, glazingSelected, packSelected, basePrice);
    cart.push(newRoll);
    console.log(cart);
}