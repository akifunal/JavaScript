const harry = "potter";
const voldemort = "He who must not be named";

export function jump() {
	console.log();
}

export default function fight(char1, char2) {
	const attack1 = Math.floor(Math.random() * char1.length);
	const attack2 = Math.floor(Math.random() * char2.length);
	return attack1 > attack2 ? `${char1} wins` : `${char2} wins`;
}

export { jump as j, fight as f };

// Dynamic import
let { j, f } = await import("./ES6-Module.js");
