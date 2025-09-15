let arr4 = [1, 2, 2, 3, 4, 4, 5];
let unique = [];
for (let i = 0; i < arr4.length; i++) {
  if (!unique.includes(arr4[i])) {
    unique.push(arr4[i]);
  }
}
console.log(unique);