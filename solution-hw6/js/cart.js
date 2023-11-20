/* Initialize empty shopping cart if nothing in local storage */
let cart = [];
let retrievedCartData = retrieveFromLocalStorage();
let globalCounter = 0; // Checking roll id for removing from cart

/* Retrieves all added rolls from local storage */
function retrieveFromLocalStorage() {
    const cartJSON = localStorage.getItem("cart");

    if (cartJSON !== null && cartJSON !== undefined) {
        return JSON.parse(cartJSON);
    } else {
        return [];
    }
}

/* Create a roll object */
class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice, globalCounter) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;
        this.totalPrice = this.calcTotalPrice();

        this.globalCounter = globalCounter; // Check roll Id

        this.element = null;
    }

    // Calculate the total price based on base price and add array to cart array
    calcTotalPrice() {
        let glazingPrice = 0;
        let packPrice = 0;

        for (let i = 0; i < glazingOptions.length; i++) {
            if (this.glazing.toLowerCase() == glazingOptions[i].name.toLowerCase()) {
                glazingPrice = glazingOptions[i].price;
                break;
            }
        }

        for (let j = 0; j < packSizeOptions.length; j++) {
            if (this.size == packSizeOptions[j].name.toLowerCase()) {
                packPrice = packSizeOptions[j].price;
                break;
            }
        }

        let total = ((this.basePrice + glazingPrice) * packPrice).toFixed(2);
        return total;
    }
}

/* Displaying all the new objects into the DOM */
function display(roll) {
    const template = document.querySelector("#cart-template");
    const clone = template.content.cloneNode(true);
    roll.element = clone.querySelector(".cart-item");

    // Changing image
    let thumbnail = roll.element.querySelector(".cinnamon-roll-thumbnail");
    thumbnail.src = "./../assets/products/" + roll.type.toLowerCase() + "-cinnamon-roll.jpg";

    // Changing name
    let cinnamonRollName = roll.element.querySelector(".cinnamon-roll-name");
    cinnamonRollName.textContent = roll.type + " Cinnamon Roll";

    // Changing glazing type
    let glazingChoice = roll.element.querySelector(".glazing-choice");
    glazingChoice.textContent = "Glazing: " + roll.glazing;

    // Changing pack size
    let packChoice = roll.element.querySelector(".pack-choice");
    packChoice.textContent = "Pack Size: " + roll.size;

    // Calculating the total price based on glazing type, pack size, and the base price
    let price = roll.element.querySelector(".price");
    price.textContent = "$ " + roll.totalPrice;

    // Remove the cart entry
    let removeRollButton = roll.element.querySelector(".remove-button");

    removeRollButton.addEventListener('click', () => {
        deleteRoll(roll);
      });
    
    // Adding the roll after the previous roll
    let cartList = document.querySelector(".cart-list");
    cartList.appendChild(roll.element);

}

/* Displays all the rolls in local storage on the cart page */
function displayCartItems() {
    const cartList = document.querySelector(".cart-list");

    cartList.innerHTML = "";

    if (retrievedCartData !== null && retrievedCartData !== undefined) {
        let roll;
        for (const item of retrievedCartData) {
            roll = new Roll(item.type, item.glazing, item.size, item.basePrice, globalCounter);
            cart.push(roll);
            display(roll);
            globalCounter += 1;
        }
    }
}

displayCartItems();

/* Calculates the total checkout price */
function totalCartPrice(cart) {
    let sum = 0;

    for (let i = 0; i < cart.length; i++) {
        sum += parseFloat(cart[i].totalPrice);
    }

    return sum;
}

sumOfCart = document.getElementById("total-cart-price");
sumOfCart.textContent = "$ " + totalCartPrice(cart).toFixed(2);

/* Removes the roll from the cart */
function deleteRoll(roll) {
    let counter = roll.globalCounter;
    roll.element.remove();

    // Remove the specified roll from the array
    for (let i = 0; i < cart.length; i++) {
        if (counter == cart[i].globalCounter) {
            cart.splice(i, 1);
            break;
        }
    }

    // Updates the total cart price after removing a roll
    sumOfCart = document.getElementById("total-cart-price");
    sumOfCart.textContent = "$ " + totalCartPrice(cart).toFixed(2);

    saveToLocalStorage();
}

function saveToLocalStorage() {
    const cartJSON = JSON.stringify(cart);

    console.log(cartJSON);
    // Save the JSON string in local storage
    localStorage.setItem("cart", cartJSON);
}