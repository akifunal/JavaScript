/* CODING CHALLENGE 4
 */

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.
Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
GOOD LUCK 😀
*/

const Mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calculateBMI() {
    this.bmi = this.mass / (this.height ** 2);
    return this.bmi;
  }
}


const John = {
  fullName: "John Smith",
  mass: 110,
  height: 1.95,
  calculateBMI() {
    this.bmi = this.mass / (this.height ** 2);
    return this.bmi;
  }
}


if (Mark.calculateBMI() > John.calculateBMI()) {
  console.log(`${Mark.fullName} has the highest BMI with ${Mark.bmi}`)
} else if (John.bmi > Mark.bmi) {
  console.log(`${John.fullName} has the highest BMI with ${John.bmi}`)
} else {
  console.log("They have the same BMI.");
}