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

const item = {
	name: "ps5",
	price: 500,
};

const item2 = {
	name: "pc",
	price: 1600,
};

function addItemToCart(obj, item) {
	obj.cart.push(item);
	obj.cart.map((item) => (item.price += item.price * 0.03));
}

function buyItem(obj) {
	obj.cart.forEach((item) => obj.purchases.push(item));
	obj.cart.splice(0, obj.cart.length);
}

function purchaseItem(obj, item) {
	addItemToCart(obj, item);
	buyItem(obj);
}

// const compose = (f, g) => (data) => f(g(data));

// const purchaseItem = compose(buyItem, addItemToCart);

purchaseItem(user, item);
purchaseItem(user, item2);
user;

//Bonus:
// accept refunds.
// Track user history.
