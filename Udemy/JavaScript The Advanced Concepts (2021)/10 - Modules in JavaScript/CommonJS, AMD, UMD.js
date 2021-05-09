// CommonJS and AMD
// CommonJS is synchronous
// CommonJS is still using in NODE.JS. browserify
var module1 = require("module1"); //.fight;
var module2 = require("module2");

function fight() {}

module.exports = {
	fight: fight,
};

// AMD is for web. Asynchronous. Old tech
define(["module1", "module2"], function (module1Import, module2Import) {
	var fight = module1Import.fight;
	var module2 = module2Import; //.importedFunc2;

	function dance() {}

	return {
		dance,
	};
});
