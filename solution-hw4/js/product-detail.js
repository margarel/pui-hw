/* All the glazing options */
let glazingOptions = [
    {name: "Keep original", price: 0.00},
    {name: "Sugar milk", price: 0.00},
    {name: "Vanilla milk", price: 0.50},
    {name: "Double chocolate", price: 1.50}
];

/* All the pack size options with their prices */
let packSizeOptions = [
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
}

populateDropdown("glazing", glazingOptions);
populateDropdown("pack-size", packSizeOptions);

/* Updates the price on change of dropdown selection */
function updatePrice() {

    /* https://www.w3schools.com/jsref/jsref_number_parsefloat.asp */
    let glazingPrice = parseFloat(document.getElementById("glazing").value);
    let packPrice = parseFloat(document.getElementById("pack-size").value);
    let basePrice = 2.49;

    let total = (basePrice + glazingPrice) * packPrice;

    /* https://www.w3schools.com/jsref/jsref_tofixed.asp */
    document.getElementById("total-price").textContent = "$ " + total.toFixed(2); // toFixed --> to the second decimal place
}

const glazeSelect = document.getElementById("glazing");
glazeSelect.addEventListener("change", updatePrice);

const packSelect = document.getElementById("pack-size");
packSelect.addEventListener("change", updatePrice);