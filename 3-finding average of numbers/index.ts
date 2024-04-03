//Q-3 find average of numbers.
let sum = 0;
function average(Numbers) {
  for (let i = 0; i < Numbers.length; i++) {
    sum += Numbers[i];

  }
  console.log("sum of numbers:", sum);
  
  console.log("no.Of Items", Numbers.length);
  let formula = sum / Numbers.length;
  return Math.round(formula);
}

console.log("Average Of Numbers=", average([2, 4, 6, 8, 10, 12, 14]));
//Author-Huma Mohsin
