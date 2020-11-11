let convertFahrenheit = (fahrenheit) => {
    return {
        fahrenheit: fahrenheit,
        celsius: (fahrenheit - 32) * (5 / 9),
        kelvin: (fahrenheit + 459.67) * (5 / 9)
    }
};

let temps = convertFahrenheit(45);
console.log(temps);