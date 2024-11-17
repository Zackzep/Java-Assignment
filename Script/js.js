const btnTest = document.getElementById("btnTest");
const drinks = document.getElementsByClassName("drinks");
const pizzaSize = document.getElementsByClassName("pizzaSize");
const vegToppings = document.getElementsByClassName("vegToppings");
const meatToppings = document.getElementsByClassName("meatToppings");
const crust = document.getElementById("crust");
const buyernotes = document.getElementById("buyernotes");
const nameInput = document.getElementById("nameInput");  // Updated to match the new ID in HTML
const streetAddressInput = document.getElementById("streetAddressInput"); // Updated ID
const cityInput = document.getElementById("cityInput"); // Updated ID
const stateInput = document.getElementById("stateInput"); // Updated ID
const zipCodeInput = document.getElementById("zipCodeInput"); // Updated ID
const phoneInput = document.getElementById("phoneInput"); // Updated ID
const display = document.getElementById("display");
let receipt = "";
let total = 0;

btnTest.addEventListener('click', function () {
    receipt = "";  // Reset the receipt every time the button is clicked
    total = 0;
    // Get selected drink
    for (let i = 0; i < drinks.length; i++) {
        if (drinks[i].checked) {
            receipt += 'Drink: ' + drinks[i].nextElementSibling.textContent + ' ($' + drinks[i].value + ')<br>';
            total += parseFloat(drinks[i].value); // Add the drink price to total
            break;
        }
    }

    // Get selected pizza size
    for (let i = 0; i < pizzaSize.length; i++) {
        if (pizzaSize[i].checked) {
            receipt += 'Pizza Size: ' + pizzaSize[i].nextElementSibling.textContent + ' ($' + pizzaSize[i].value + ')<br>';
            total += parseFloat(pizzaSize[i].value); // Add the pizza size price to total
            break;
        }
    }

    // Get selected meat toppings
    let meatSelections = [];
    for (let i = 0; i < meatToppings.length; i++) {
        if (meatToppings[i].checked) {
            meatSelections.push(meatToppings[i].nextElementSibling.textContent + ' ($' + meatToppings[i].value + ')');
            total += parseFloat(meatToppings[i].value);
        }
    }
    if (meatSelections.length > 0) {
        receipt += 'Meat Toppings: ' + meatSelections.join(', ') + '<br>';
    } else {
        receipt += 'Meat Toppings: None<br>';
    }

    // Get selected veggie toppings
    let vegSelections = [];
    for (let i = 0; i < vegToppings.length; i++) {
        if (vegToppings[i].checked) {
            vegSelections.push(vegToppings[i].nextElementSibling.textContent + ' ($' + vegToppings[i].value + ')');
            total += parseFloat(vegToppings[i].value);
        }
    }
    if (vegSelections.length > 0) {
        receipt += 'Veggie Toppings: ' + vegSelections.join(', ') + '<br>';
    } else {
        receipt += 'Veggie Toppings: None<br>';
    }

    // Get selected crust
    receipt += 'Crust Type: ' + crust.value + '<br>';

    receipt += 'Total: $' + total.toFixed(2) + '<br>';

    // Get special notes
    receipt += 'Special Notes: ' + buyernotes.value + '<br>';

    const name = nameInput.value;
    const streetAddress = streetAddressInput.value;
    const city = cityInput.value;
    const state = stateInput.value;
    const zipCode = zipCodeInput.value;
    const phoneNumber = phoneInput.value;

    receipt += 'Customer Name: ' + name + '<br>';
    receipt += 'Address: ' + streetAddress + ', ' + city + ', ' + state + ' ' + zipCode + '<br>';
    receipt += 'Phone Number: ' + phoneNumber + '<br>';

    // Display the receipt in the PrintBox element
    document.getElementById("PrintBox").innerHTML = receipt;
});