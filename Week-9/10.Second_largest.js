let arr5 = [10, 20, 4, 45, 99];
let largest = -Infinity, secondLargest = -Infinity;
for (let i = 0; i < arr5.length; i++) {
  if (arr5[i] > largest) {
    secondLargest = largest;
    largest = arr5[i];
  } else if (arr5[i] > secondLargest && arr5[i] !== largest) {
    secondLargest = arr5[i];
  }
}
console.log(secondLargest);