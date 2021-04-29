// Amazon shopping
const user = {
	name: "Kim",
	active: true,
	cart: [],
	purchases: [],
};

console.log(user["purchases"]);

//Implement a cart feature:
// 1. Add items to cart.
// 2. Add 3% tax to item in cart
// 3. Buy item: cart --> purchases
// 4. Empty cart

function addItem(obj, item) {
	obj.cart.push(item);
}

function addTax(obj, index) {
	obj.cart[index] += (obj.cart[index] * 3) / 100;
}

function buyItem(obj, index) {
	purchases.push(obj.cart[index]);
}

function emptyCart(obj) {
	obj.cart.splice(0, obj.cart.length);
}

//Bonus:
// accept refunds.
// Track user history.
