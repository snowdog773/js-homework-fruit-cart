/*

	FRUIT SHOPPE

	A shop we can use in our browser's console.
	We can only buy fruit.

*/


// *price is in pennies:
const fruits = [
	{
		name: "apple",
		price: 195,
	},
	{
		name: "banana",
		price: 125,
	},
	{
		name: "mango",
		price: 255,
	},
	{
		name: "tomato",
		price: 95,
	},
	{
		name: "avocado",
		price: 305,
	},
	{
		name: "pineapple",
		price: 560,
	},
	{
		name: "strawberry",
		price: 65,
	}
];

const cart = [
	{
		name: "strawberry",
		quantity: 1
	} // <-- Our shopping cart already has one item in it.
];

const NEWLINE = "\n";



function displayFruits() {
	console.log(`**INVENTORY**`);
	// MAP each fruit in the `fruits` array into a string (hint: template string)
	// and be sure to include the name of the fruit as well as the price in pounds!!
	// STORE the resulting array into a constant/variable named `lines`.
	const lines = fruits.map(function(fruits) {
		// 1. Use the `price` on `fruit` to convert from pennies to pounds (/ 100) and
		//    STORE the value in a VARIABLE called `cost`.
            cost = (fruits.price / 100).toFixed(2);
		// 3. use .toFixed(2) on `cost` and STORE the result back into `cost`
		// 4. RETURN a template string containing the name of the fruit and its price
		return `${fruits.name} : £${cost}`;
        
	});
	// 5. Use the array method `join` and combine the strings in the
	//    `lines` array with the *new line* character and STORE it
	//    into a variable/constant named `output`.
const output = lines.join(NEWLINE);
	// 6. OUTPUT the `output` to the console...
console.log(output);
}
// CALL `displayFruits` and test it out.
displayFruits();



function displayCart() {
	console.log(`**SHOPPING CART**`);
	// 7. IMPLEMENT something similar to the previous function.
	//    We want to MAP the *`cart`* items to strings displaying
	//    the `name` of the fruit and the `quantity` (how many).

    const cartLines = cart.map(function(cart) {
        return `${cart.name} : ${cart.quantity}`;
    });

	//    Use the `join` array method to combine these strings
	//    together with a *new line* character.

    const cartOutput = cartLines.join(NEWLINE);

	//    OUTPUT this string to the console.

    console.log(cartOutput);

}

// CALL `displayCart` and test!
displayCart();



function fruitByName(fruitName) {
	// This FUNCTION takes a `fruitName` and returns a function
	// to be used in an Array method later-on.

	return function(fruit, index, fruits) {
		// 8. COMPARE the NAME of the fruit (fruit.name) with
		//    the `fruitName`parameter in the parent function and
		//    return whether or not they match.
	};
}



function getFruit(fruitName) {
	// 9. CALL our `fruitByName` function, pass into it
	//    `fruitName`, and STORE the function returned.

	// 10. Next, we must *FIND* and RETURN a fruit from the
	//     `fruits` array by passing the function stored above
	//     into one of `fruits` array methods.
	return;
}

// CALL `getFruit` and test
// console.log(getFruit("pineapple"));



function getCartItem(fruitName) {
	// 11. CALL our `fruitByName` function, pass into it the
	//     `fruitName` parameter, and STORE the function returned.

	// 12. Next, we must *FIND* and RETURN a fruit from the
	//     `cart` array by passing the function stored above
	//     into one of `cart`s array methods.
	return;
}

// CALL `getCartItem` and test
// console.log(getCartItem("strawberry"));



function addToCart(fruitName, quantity = 1) {
	// When we add, sometimes we might already have the fruit
	// in the cart that we're looking for, so all we need to
	// do is increment its `quantity` instead...

	// 13. using the function `getCartItem`, STORE the result
	//     into a constant/variable named `fruit`.


	// 14. IS `fruit` an object, or is it *undefined* (no match was found)?
	if (false) { // <-- replace with the appropriate expression
		// IF an OBJECT, CONTINUE...

		// 14.a) INCREMENT the quantity value on the object stored
		//       in `fruit` (fruit.quantity) by the `quantity`
		//       passed to this function and assign the value
		//       to a variable named `newQuantity`.

		// 14.b) OUTPUT to the console how many of `fruitName` are in the cart.
	} else {
		// OTHERWISE

		// 14.c) We should PUSH a new OBJECT to the
		//       `cart`. This OBJECT should have a name (which
		//       matches `fruitName`) and a quantity (which
		//       equals the `quantity` parameter) as keys.
		cart.push();

		// 14.d) OUTPUT to the console how many of `fruitName` are in the cart.
	}
}
// *BONUS*
// for addToCart, what if we don't have a fruit
// and price for the provided fruitName? How might we
// account for that? (HINT: use getFruit)
// **

// TEST
// addToCart("pineapple", 2);
// addToCart("avocado");



// 15. Define `fruitName` and `quantity` PARAMETERS where the
//     default for `quantity` is 1.
function removeFromCart() {
	// 16. STORE a cart item using the function getCartItem into
	//     a constant/variable named `fruit`.

	// 17. IS `fruit` an object, or is it *undefined* (no match was found)?
	if (true) { // <-- replace
		// IF an OBJECT, CONTINUE...

		// 17.a) DECREMENT fruit.quantity by the `quantity`
		//       passed to this function and store the value into
		//       a new variable/constant named `newQuantity`.

		// 17.b) IS the `newQuantity` LESS THAN OR EQUAL TO zero (0)?
		//       if so, we should probably remove it from the cart entirely!
		if (true) { // <-- replace
			// IF SO, CONTINUE...

			// 17.b.i) find the INDEX of our `fruit` and store it into a variable/constant.
			//         (hint: cart.indexOf will do just fine...)
			
			// 17.b.ii) REMOVE (*splice*) the fruit from the cart using the known index.

			// 17.b.iii) OUTPUT to the console there are no more `fruitName` left...
		} else {
			// OTHERWISE, since `newQuantity` is greater than zero:

			// 17.b.iv) OUTPUT to the console how many of `fruitName` was removed, and how many are remaining:
		}
	} else {
		// OTHERWISE, since `fruit` is undefined:
		
		// 17.c) OUTPUT to the console that no item named `fruitName` was found.
	}
}

// TEST
// removeFromCart("strawberry");

function getTotal() {
	// 18. DECLARE and ASSIGN zero (0) to a variable named `total`
	let total = 0;
	
	// 19. FOR EACH item in our `cart`, get the `quantity` (item.quantity)
	//     and then multiply it by the price of the fruit.
	cart.forEach(function(fruit, index, fruits) {
		// However, the price of the fruit is stored in the `fruits`
		// array and not our `cart`! We must get the fruit item
		// (getFruit(name)) from `fruits` and use its `price` property.
		//
		// INCREMENT `total` by the `quantity` multiplied by the `price`
		// fetched from the `fruits` array.
	});

	// 20. DIVIDE `total` by 100 (to convert to pounds from pennies)
	//     and assign this new number back to `total`.

	// 21. Next, use .toFixed(2) to force the number of decimal places
	//     and assign back to `total`.

	// 22. OUTPUT to the console the total price for X items is Y pounds.

	// 23. RETURN the total price.
}

// TEST
// getTotal();
