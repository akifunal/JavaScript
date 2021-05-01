// map and concat methods can fix this issue of mutation

const array = [1, 2, 3];
function removeLastItem(arr) {
	const newArray = [...arr];
	//const newArray = arr.slice();
	//const newArray = [].concat(arr);
	newArray.pop();
	return newArray;
}

function multiplyBy2(arr) {
	return arr.map((item) => item * 2);
}
const array2 = removeLastItem(array);
const array3 = multiplyBy2(array);
console.log(array, array2, array3);

//no side effects
//input --> output
