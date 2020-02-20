// Following day

let day = prompt("Please enter a day: ");
switch (day) {
  case "Monday":
    console.log(`Following day is Tuesday.`);
    break;
  case "Tuesday":
    console.log(`Following day is Wednesday.`);
    break;
  case "Wednesday":
    console.log(`Following day is Thursday.`);
    break;
  case "Thursday":
    console.log(`Following day is Friday.`);
    break;
  case "Friday":
    console.log(`Following day is Saturday.`);
    break;
  case "Saturday":
    console.log(`Following day is Sunday.`);
    break;
  case "Sunday":
    console.log(`Following day is Monday.`);
    break;

  default:
    break;
};

// Number comparison

let number1 = Number(prompt("Enter a number: "));
let number2 = Number(prompt("Enter another number: "));

if (number1 === number2) {
  alert(`${number1} and ${number2} are equals`);
} else if (number1 < number2) {
  alert(`${number2} is bigger than ${number1}`);
} else {
  alert(`${number1} is bigger than ${number2}`);
}


// Final values

let nb1 = Number(prompt("Enter nb1:")); // nb1 = 2
let nb2 = Number(prompt("Enter nb2:")); // nb2 = 4
let nb3 = Number(prompt("Enter nb3:")); // nb3 = 0

if (nb1 > nb2) {
  nb1 = nb3 * 2;
} else {
  nb1++; // nb1 = 3
  if (nb2 > nb3) {
    nb1 += nb3 * 3; // nb1 = 3
  } else {
    nb1 = 0;
    nb3 = nb3 * 2 + nb2;
  }
}
console.log(nb1, nb2, nb3); // 3 4 0 

// Number of days in a month

let month = Number(prompt('Enter a month number: '));
switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log(`${month}. month takes 31 days.`);
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    console.log(`${month}. month takes 30 days.`);
    break;
  case 2:
    console.log(`${month}. month takes 29 days.`);
  default:
    break;
}

// Following second

let hours = Number(prompt('Enter hour: '));
let minutes = Number(prompt('Enter minute : '));
let seconds = Number(prompt('Enter second: '));
if (seconds < 59) {
  seconds++;
} else if (seconds === 59) {
  seconds = 0;
  if (minutes < 59) {
    minutes++;
  } else if (minutes === 59) {
    minutes = 0;
    if (hours < 23) {
      hours++;
    } else if (hours === 23) {
      hours = 0;
    }
  }
}
console.log(`${hours}h${minutes}m${seconds}s`);