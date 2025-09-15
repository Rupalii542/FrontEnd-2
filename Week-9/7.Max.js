let arr2 = [3, 7, 2, 9, 5];
let max = arr2[0];
for (let i = 1; i < arr2.length; i++) {
  if (arr2[i] > max) {
    max = arr2[i];
  }
}
console.log(max);
