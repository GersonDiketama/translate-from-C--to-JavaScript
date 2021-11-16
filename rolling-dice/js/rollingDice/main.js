// Put your code here

console.log("Let's roll some dice, baby!");
console.log("---------------------------");

let dieString = ["zero", "one", "two", "three", "four", "five", "six"];

for (let i = 0; i < 10; i++) {
  let dieValue = Math.floor(Math.random() * 6) + 1;

  let dieValue2 = Math.floor(Math.random() * 6) + 1;

  let message = `${dieString[dieValue]} + ${dieString[dieValue2]} == ${
    dieValue + dieValue2
  }`;

  if (dieValue == dieValue2) {
    message += " DOUBLES";
  }
  console.log(message);
}
