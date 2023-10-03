/* 
1. use js to display the items in the cart
2. user can remove item
3. total price updates



*/








/* Initialize the shopping cart */
let cart = [];

class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;
    }

    // Calculate the total price based on base price and add array to cart array
    toCartArray() {
        let glazingPrice = 0;
        let packPrice = 0;

        for (let i = 0; i < glazingOptions.length; i++) {
            if (this.glazing.toLowerCase() == glazingOptions[i].name.toLowerCase()) {
                glazingPrice = glazingOptions[i].price;
                break;
            }
        }

        /* console.log(glazingPrice); */

        for (let j = 0; j < packSizeOptions.length; j++) {
            if (this.size == packSizeOptions[j].name.toLowerCase()) {
                packPrice = packSizeOptions[j].price;
                break;
            }
        }

        /* console.log(packPrice); */

        let total = ((this.basePrice + glazingPrice) * packPrice).toFixed(2);
        /* console.log(total); */
        let cartArray = [this.type, this.glazing, this.size, total];
        /* console.log(cartArray); */
        cart.push(cartArray);
        return cart;
    }
}

let roll1 = new Roll("Original", "Sugar Milk", 1, 2.49); // total = $2.49
let roll2 = new Roll("Walnut", "Vanilla Milk", 12, 3.49); // total = $39.90
let roll3 = new Roll("Raisin", "Sugar Milk", 3, 2.99); // total = $8.97
let roll4 = new Roll("Apple", "Original", 3, 3.49); // total = $10.47

roll1.toCartArray();
roll2.toCartArray();
roll3.toCartArray();
roll4.toCartArray();

console.log(cart);





/* function totalPrice() {

}

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

function updatePrice() {
    let glazingPrice = parseFloat(document.getElementById("glazing").value);
    let packPrice = parseFloat(document.getElementById("pack-size").value);

    let total = (basePrice + glazingPrice) * packPrice;

    document.getElementById("total-price").textContent = "$ " + total.toFixed(2);
}

/* let roll1 = new Roll("Original", "Sugar Milk", 1, totalPrice);
let roll2 = new Roll("Walnut", "Vanilla Milk", 12, totalPrice);
let roll3 = new Roll("Raisin", "Sugar Milk", 3, totalPrice);
let roll4 = new Roll("Apple", "Original", 3, totalPrice); */

/* cart.push(roll1, roll2, roll3, roll4); */