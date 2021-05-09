"use strict";
(function () {
	try {
		throw new Error("test");
	} catch (err) {
		var err = 5;
		var boo = 10;
		console.log(err);
	}
	//Guess what the output is here:
	console.log(err);
	console.log(boo);
})();

// 5
// undefined
// 10
