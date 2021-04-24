//exercise:
function callMeMaybe() {
  const callMe = "Hi!";
  setTimeout(function () {
    console.log(`${callMe} ${baby}`);
  }, 4000);
  const baby = "Baby";
}

callMeMaybe();
