/* Initialize the shopping cart */

/* TODO: If no cart exists, create empty array  */
let cart = [];

class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;

        this.element = null;
    }

    // Calculate the total price based on base price and add array to cart array
    totalPrice() {
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

    // Adding roll to cart array
    toCartArray() {
        let cartArray = [this.type, this.glazing, this.size, this.totalPrice()];
        cart.push(cartArray);
    }
}

// All the new objects
let roll1 = new Roll("Original", "Sugar Milk", 1, 2.49); // total = $2.49
let roll2 = new Roll("Walnut", "Vanilla Milk", 12, 3.49); // total = $39.90
let roll3 = new Roll("Raisin", "Sugar Milk", 3, 2.99); // total = $8.97
let roll4 = new Roll("Apple", "Original", 3, 3.49); // total = $10.47

// Adding new objects to the cart
roll1.toCartArray();
roll2.toCartArray();
roll3.toCartArray();
roll4.toCartArray();

/* Displaying all the new objects into the DOM */
function display(roll) {
    const template = document.querySelector("#cart-template");
    const clone = template.content.cloneNode(true);
    roll.element = clone.querySelector(".cart-item");

    // Changing image
    let thumbnail = roll.element.querySelector(".cinnamon-roll-thumbnail");
    console.log(roll.element);
    console.log(roll.element.querySelector(".cinnamon-roll-thumbnail"));
    thumbnail.src = "./../assets/products/" + roll.type.toLowerCase() + "-cinnamon-roll.jpg";

    // Changing name
    let cinnamonRollName = roll.element.querySelector(".cinnamon-roll-name");
    cinnamonRollName.textContent = roll.type + " Cinnamon Roll";
    console.log(cinnamonRollName);

    // Changing glazing type
    let glazingChoice = roll.element.querySelector(".glazing-choice");
    glazingChoice.textContent = "Glazing: " + roll.glazing;

    // Changing pack size
    let packChoice = roll.element.querySelector(".pack-choice");
    packChoice.textContent = "Pack Size: " + roll.size;

    // Calculating the total price based on glazing type, pack size, and the base price
    let price = roll.element.querySelector(".price");
    price.textContent = "$ " + roll.totalPrice();

    // Remove the cart entry
    let removeRollButton = roll.element.querySelector(".remove-button");

    removeRollButton.addEventListener('click', () => {
        deleteRoll(roll);
      });
    
    // Adding the roll after the previous roll
    let cartList = document.querySelector(".cart-list");
    cartList.appendChild(roll.element);

}

// Displays all the rolls into the DOM
display(roll1);
display(roll2);
display(roll3);
display(roll4);

/* Calculates the total checkout price */
function totalCartPrice(cart) {
    let sum = 0;

    for (let i = 0; i < cart.length; i++) {
        sum += parseFloat(cart[i][3]);
    }

    return sum;
}

sumOfCart = document.getElementById("total-cart-price");
sumOfCart.textContent = "$ " + totalCartPrice(cart).toFixed(2);

/* Removes the roll from the cart */
function deleteRoll(roll) {
    roll.element.remove();

    // Remove the specified roll from the array
    for (let i = 0; i < cart.length; i++) {
        if (roll.type == cart[i][0]) {
            cart.splice(i, 1);
            break;
        }
    }

    // Updates the total cart price after removing a roll
    sumOfCart = document.getElementById("total-cart-price");
    sumOfCart.textContent = "$ " + totalCartPrice(cart).toFixed(2);
}