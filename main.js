// // // print all even nos in first 50 natural numbers

for (let i = 1; i <= 50; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }

  // // //print all odd numbers in natural numbers from 20 to 50
  for (let j = 20; j < 50; j++) {
    if (j % 2) {
      console.log(j);
    }
  }

  //   // // print all numbers that are divisible by 5
  //   // [12, 45, 67, 89, 90, 34, 35, 55];

  let array = [12, 45, 67, 89, 90, 34, 35, 55];
  for (let k = 0; k < array.length; k++) {
    if (Number.isInteger(array[k] / 5)) {
      console.log(array[k]);
    }
  }

  //   // // // Print all numbers of this array
  //   // // // [[1,2], [3,4], [5,6], [7,8]]

  let numbers = [
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
  ];

  for (let l = 0; l <= 4; l++) {
    console.log(numbers[l][m]);
  }
}

// // // Print all prime numbers occurring in 1st 50 natural nos.

for (let num = 1; num <= 50; num++) {
  let notPrime = false;
  for (let g = 2; g <= num / 2; g++) {
    if (num % g === 0) {
      notPrime = true;
      break;
    }
  }
  if (notPrime === false) {
    console.log(num);
  }
}
