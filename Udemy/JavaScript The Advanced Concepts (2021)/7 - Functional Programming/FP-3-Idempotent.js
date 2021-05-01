// Idempotence:
// Return same output when called multiple times
function notGood() {
	return Math.random();
	// new Date();
}

function good() {
	return 5;
}

Math.abs(Math.abs(10));
