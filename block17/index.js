const coffeeMenu = require('./coffee_data.js');


//Print an array of all the drinks on the menu.
const printDrink = (item) => {
    return item.name;
}
console.log(coffeeMenu.map(printDrink));

// Print an array of drinks that cost 5 and under.
const fiveUnder = (item) => {
    return item.price <= 5;
}
const drinksUnderFive = coffeeMenu.filter(fiveUnder);
console.table(drinksUnderFive);

//Print an array of drinks that are priced at an even number.
const evenPrice = [];

for (let i = 0; i < coffeeMenu.length; i++) {
  if (coffeeMenu[i].price % 2 === 0) {
    evenPrice.push(coffeeMenu[i]);
  }
}
console.table(evenPrice);

//Print the total if you were to order one of every drink.
const totalCost = coffeeMenu.reduce((accumulator, drink) => accumulator + drink.price, 0);
console.log(totalCost);

// Print an array with all the drinks that are seasonal.
const isSeasonal = (item) => {
    return item.seasonal === true;
}
const seasonalDrinks = coffeeMenu.filter(isSeasonal);
console.table(seasonalDrinks);

// Print all the seasonal drinks with the words "with imported beans" after the item name. For example: "affogato with imported beans".

const seasonalDrinksWithBeans = seasonalDrinks.map(item => {
    return item.name + (item.seasonal ? " with imported beans" : "");
  });
  console.log(seasonalDrinksWithBeans);